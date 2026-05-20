// Initialize the Supabase client from window.APP_CONFIG (js/config.js).
// Exposes window.sb for the rest of the app.
(function initSupabaseClient() {
  var cfg = window.APP_CONFIG;
  if (!cfg || !cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY) {
    console.warn(
      '[supabase-client] window.APP_CONFIG is missing. ' +
      'Copy js/config.example.js to js/config.js and fill in your values.'
    );
    window.sb = null;
    return;
  }
  if (!window.supabase || typeof window.supabase.createClient !== 'function') {
    console.error(
      '[supabase-client] The Supabase JS bundle did not load. ' +
      'Check the <script> tag for @supabase/supabase-js in index.html.'
    );
    window.sb = null;
    return;
  }
  window.sb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      storageKey: 'zkn-portfolio-auth'
    }
  });
})();
