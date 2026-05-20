# Admin Backend Setup

This portfolio adds an admin role backed by [Supabase](https://supabase.com)
(free tier — no credit card). The frontend stays on GitHub Pages and talks to
Supabase directly using its publishable anon key + Row Level Security.

Follow the steps in order. After every step there is a **Verify** block — do
not skip it.

---

## 1. Create the Supabase project

1. Go to <https://supabase.com> and sign up (free).
2. Click **New Project**.
   - Name: `portfolio` (anything works).
   - Database password: generate a strong one and store it in a password
     manager. You will not need it for normal use, but you cannot recover it.
   - Region: pick the one closest to you.
3. Wait ~2 minutes for provisioning to finish.

**Verify:** the Supabase dashboard loads at
`https://app.supabase.com/project/<your-project-ref>`.

---

## 2. Create your admin user

This is the *only* account that will be allowed to write to the database.

1. In the Supabase dashboard go to **Authentication → Providers** and make
   sure **Email** is enabled. Disable "Confirm email" while you are setting
   up — you can re-enable it later (we only have one user).
2. Go to **Authentication → Users → Add user → Create new user**.
   - Email: the address you want to log in with.
   - Password: a strong password (store it in your password manager).
   - Auto-confirm user: **yes**.
3. Note the email exactly — you will paste it in the next step.

**Verify:** the user appears in **Authentication → Users** with status
`Confirmed`.

---

## 3. Run the schema migration

The schema lives in [`supabase/migrations/001_initial_schema.sql`](supabase/migrations/001_initial_schema.sql).
It creates three tables (`articles`, `calendar_events`, `page_content`), an
`updated_at` trigger, RLS policies, and a public `article-images` storage
bucket.

1. Open the file in your editor.
2. Find **every** occurrence of the placeholder `YOUR_ADMIN_EMAIL` (there are
   **8** of them) and replace it with the email from step 2.
   - In VS Code: `Cmd/Ctrl+F`, type `YOUR_ADMIN_EMAIL`, click "Replace All".
   - The email must be wrapped in single quotes, e.g.
     `auth.email() = 'me@example.com'`.
3. In the Supabase dashboard open **SQL Editor → New query**.
4. Paste the whole edited file and click **Run**.

**Verify:**
- **Table Editor** shows `articles`, `calendar_events`, `page_content`.
- **Authentication → Policies** shows two policies per table.
- **Storage** shows a bucket named `article-images` marked *Public*.

> If you ever change your admin email, re-run the policy `create policy …`
> blocks with the new email after dropping the old ones. The RLS check is
> evaluated server-side on every request, so the frontend cannot bypass it.

---

## 4. Wire the frontend to Supabase

1. In the Supabase dashboard go to **Project Settings → API**.
2. Copy:
   - **Project URL** (looks like `https://xxxx.supabase.co`)
   - **anon public** key (safe to expose in the browser)
3. In this repo, copy `js/config.example.js` to `js/config.js`:
   ```bash
   cp js/config.example.js js/config.js
   ```
4. Open `js/config.js` and fill in `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and
   `ADMIN_EMAIL` (the same email you used in step 2 / step 3).
5. `js/config.js` is already in `.gitignore` — **never** commit it.

> The anon key is the *publishable* client key. It is safe to ship. The
> `service_role` key is **not** — it bypasses RLS. Never put it in frontend
> code or commit it.

**Verify:** open `index.html` in a browser, open DevTools → Console, and run
`window.APP_CONFIG`. It should print your config object. Then run
`window.sb` — it should print the Supabase client.

---

## 5. Log in as admin

1. Load the site.
2. Click the small **Admin** link in the footer (or press
   `Ctrl/Cmd + Shift + A`).
3. Enter your admin email and password and click **Sign in**.

**Verify:**
- A dark banner appears at the top of the page reading
  `Admin mode — <your email>` with a **Sign out** button.
- In the DevTools console, `window.IS_ADMIN` is `true`.
- `document.body.classList.contains('admin-mode')` is `true`.

If sign-in fails, double-check that the user is *Confirmed* in the Supabase
dashboard and that the email/password match.

---

## 6. Editor choice

This build uses **TipTap** via the official UMD CDN bundles. The bundles are
loaded in `index.html`. On first run, `js/components/tiptap-editor.js` checks
that `window.tiptap` is available; if it is not, it shows a console error and
the writing editor falls back to a plain `<textarea>` so you do not lose work.

If you want to switch to TinyMCE later, follow the original prompt — replace
the TipTap script tags in `<head>` with the TinyMCE bundle and swap the
contents of `js/components/tiptap-editor.js`. All writes will go straight to
the `content_html` column; the `content` (jsonb) column can stay empty.

---

## 7. Daily use

- **Writing**: go to the Writing page while signed in. Click **+ New Article**,
  fill in title/cover/excerpt, write in the editor, click **Save Draft** (or
  **Publish**). Publishing also creates a corresponding `article_published`
  event on the home calendar.
- **Calendar**: hover any date on the home or MoU calendar and click
  **+ Add event**. Events with `visible_on` containing `home` show on the home
  page; events with `mou` show on the MoU/MoA page.
- **Inline text edits**: hover any heading/paragraph/CTA — if it has a dashed
  outline, click it, type, and click outside to save.

Sign out from the banner when you are done. The site immediately returns to
the public read-only view.

---

## Troubleshooting

| Symptom | Likely cause |
| --- | --- |
| Sign-in succeeds but no admin banner | `ADMIN_EMAIL` in `js/config.js` does not match the email of the auth user. |
| `permission denied for table articles` on save | RLS policy email placeholder was not replaced before running the migration. Re-run the policy section with the right email. |
| Image upload says `new row violates row-level security policy` | Same as above, for the `article-images` storage policies. |
| Site loads but no Supabase client | `js/config.js` is missing — copy `js/config.example.js`. |
| TipTap toolbar buttons do nothing | The CDN scripts failed to load. Check the Network tab; if blocked, switch to TinyMCE per §6. |
