-- ============================================================================
-- Portfolio Admin: Initial Schema
-- ============================================================================
-- BEFORE RUNNING:
--   1. Replace EVERY occurrence of 'YOUR_ADMIN_EMAIL' (8 places) with the
--      email of the Supabase auth user you created for yourself.
--      Tip: in Supabase SQL Editor use Cmd/Ctrl+D to multi-select.
--   2. Run the whole file in one execution.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- Extensions
-- ---------------------------------------------------------------------------
create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- updated_at trigger helper
-- ---------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ===========================================================================
-- TABLE: articles
-- ===========================================================================
create table if not exists public.articles (
  id              uuid primary key default gen_random_uuid(),
  title           text not null,
  slug            text not null unique,
  content         jsonb not null default '{}'::jsonb,
  content_html    text,
  excerpt         text,
  cover_image_url text,
  published       boolean not null default false,
  published_at    timestamptz,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create index if not exists articles_published_idx
  on public.articles (published, published_at desc);

create index if not exists articles_updated_idx
  on public.articles (updated_at desc);

drop trigger if exists trg_articles_updated_at on public.articles;
create trigger trg_articles_updated_at
  before update on public.articles
  for each row execute function public.set_updated_at();

-- ===========================================================================
-- TABLE: calendar_events
-- ===========================================================================
create table if not exists public.calendar_events (
  id                 uuid primary key default gen_random_uuid(),
  title              text not null,
  description        text,
  event_date         date not null,
  event_time         time,
  event_type         text not null
                     check (event_type in ('meeting','note','article_published','other')),
  location           text,
  notes              text,
  linked_article_id  uuid references public.articles(id) on delete set null,
  visible_on         text[] not null default '{}',
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);

create index if not exists calendar_events_date_idx
  on public.calendar_events (event_date);

create index if not exists calendar_events_visible_on_idx
  on public.calendar_events using gin (visible_on);

drop trigger if exists trg_calendar_events_updated_at on public.calendar_events;
create trigger trg_calendar_events_updated_at
  before update on public.calendar_events
  for each row execute function public.set_updated_at();

-- ===========================================================================
-- TABLE: page_content
-- ===========================================================================
create table if not exists public.page_content (
  id           uuid primary key default gen_random_uuid(),
  page_key     text not null unique,
  content_type text not null
               check (content_type in ('text','html','image_url')),
  content      text not null,
  updated_at   timestamptz not null default now()
);

drop trigger if exists trg_page_content_updated_at on public.page_content;
create trigger trg_page_content_updated_at
  before update on public.page_content
  for each row execute function public.set_updated_at();

-- ===========================================================================
-- Row Level Security
-- ===========================================================================
alter table public.articles        enable row level security;
alter table public.calendar_events enable row level security;
alter table public.page_content    enable row level security;

-- --- articles ---------------------------------------------------------------
drop policy if exists "articles_public_read"  on public.articles;
drop policy if exists "articles_admin_all"    on public.articles;

create policy "articles_public_read"
  on public.articles
  for select
  using (published = true);

create policy "articles_admin_all"
  on public.articles
  for all
  to authenticated
  using      (auth.email() = 'YOUR_ADMIN_EMAIL')
  with check (auth.email() = 'YOUR_ADMIN_EMAIL');

-- --- calendar_events --------------------------------------------------------
drop policy if exists "calendar_public_read" on public.calendar_events;
drop policy if exists "calendar_admin_all"   on public.calendar_events;

create policy "calendar_public_read"
  on public.calendar_events
  for select
  using (true);

create policy "calendar_admin_all"
  on public.calendar_events
  for all
  to authenticated
  using      (auth.email() = 'YOUR_ADMIN_EMAIL')
  with check (auth.email() = 'YOUR_ADMIN_EMAIL');

-- --- page_content -----------------------------------------------------------
drop policy if exists "page_content_public_read" on public.page_content;
drop policy if exists "page_content_admin_all"   on public.page_content;

create policy "page_content_public_read"
  on public.page_content
  for select
  using (true);

create policy "page_content_admin_all"
  on public.page_content
  for all
  to authenticated
  using      (auth.email() = 'YOUR_ADMIN_EMAIL')
  with check (auth.email() = 'YOUR_ADMIN_EMAIL');

-- ===========================================================================
-- Storage bucket: article-images
-- ===========================================================================
-- Create the bucket (public read). Safe to re-run.
insert into storage.buckets (id, name, public)
values ('article-images', 'article-images', true)
on conflict (id) do update set public = true;

-- Drop & recreate storage policies for this bucket
drop policy if exists "article_images_public_read"   on storage.objects;
drop policy if exists "article_images_admin_insert"  on storage.objects;
drop policy if exists "article_images_admin_update"  on storage.objects;
drop policy if exists "article_images_admin_delete"  on storage.objects;

create policy "article_images_public_read"
  on storage.objects
  for select
  using (bucket_id = 'article-images');

create policy "article_images_admin_insert"
  on storage.objects
  for insert
  to authenticated
  with check (
    bucket_id = 'article-images'
    and auth.email() = 'YOUR_ADMIN_EMAIL'
  );

create policy "article_images_admin_update"
  on storage.objects
  for update
  to authenticated
  using      (bucket_id = 'article-images' and auth.email() = 'YOUR_ADMIN_EMAIL')
  with check (bucket_id = 'article-images' and auth.email() = 'YOUR_ADMIN_EMAIL');

create policy "article_images_admin_delete"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'article-images' and auth.email() = 'YOUR_ADMIN_EMAIL');
