// Copy this file to js/config.js and fill in your values.
// js/config.js is gitignored — never commit it.
//
// Supabase: https://supabase.com/dashboard/project/<your-project>/settings/api
// Formspree: https://formspree.io (free tier, create a form and copy the endpoint)

window.APP_CONFIG = {
  // Supabase project URL — found in Settings > API > Project URL
  SUPABASE_URL: 'https://YOUR_PROJECT_ID.supabase.co',

  // Supabase anon/public key — safe to expose in frontend code
  SUPABASE_ANON_KEY: 'YOUR_ANON_KEY',

  // Email address of the site admin (must match the Supabase auth user)
  ADMIN_EMAIL: 'your@email.com',

  // Formspree form endpoint — replace YOUR_FORM_ID with the ID from your form
  // Leave empty or omit to fall back to a mailto: link
  FORMSPREE_ENDPOINT: 'https://formspree.io/f/YOUR_FORM_ID',
};
