// Reusable rich-text editor for the admin Writing page.
//
// Backed by Quill 2.x (UMD CDN, no build step). The admin types words and
// uses the toolbar — they never see or have to write HTML.
//
// API (kept stable for callers like writing/article-editor.js):
//   window.RichEditor.create(mountEl, {
//     initialContent,   // optional Quill Delta object
//     initialHTML,      // optional HTML string (used when no Delta)
//     onChange,         // (json, html) => void — debounced ~500ms
//     placeholder       // string
//   })
//   → { editor, mode, getJSON, getHTML, setContent, destroy }
//
// Images upload to the public `article-images` bucket via window.sb;
// only the signed-in admin can write (enforced by RLS storage policies).
(function () {
  var BUCKET = 'article-images';
  var DEBOUNCE_MS = 500;

  // -------------------------------------------------------------------------
  // Quill availability
  // -------------------------------------------------------------------------
  function quillReady() {
    return typeof window.Quill === 'function';
  }

  // -------------------------------------------------------------------------
  // Supabase image upload
  // -------------------------------------------------------------------------
  function safeFilename(name) {
    var dot = name.lastIndexOf('.');
    var base = (dot >= 0 ? name.slice(0, dot) : name).replace(/[^a-zA-Z0-9-_]+/g, '-').slice(0, 60) || 'image';
    var ext  = dot >= 0 ? name.slice(dot + 1).toLowerCase().replace(/[^a-z0-9]/g, '') : 'png';
    return base + '-' + Date.now() + '.' + (ext || 'png');
  }

  async function uploadImage(file) {
    if (!window.sb) throw new Error('Supabase client not initialised.');
    var path = safeFilename(file.name || 'image.png');
    var upload = await window.sb.storage.from(BUCKET).upload(path, file, {
      cacheControl: '3600',
      upsert: false,
      contentType: file.type || undefined
    });
    if (upload.error) throw upload.error;
    var pub = window.sb.storage.from(BUCKET).getPublicUrl(upload.data.path);
    return pub && pub.data && pub.data.publicUrl;
  }

  function pickImageFile() {
    return new Promise(function (resolve) {
      var input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.style.display = 'none';
      input.addEventListener('change', function () {
        var f = input.files && input.files[0];
        document.body.removeChild(input);
        resolve(f || null);
      });
      document.body.appendChild(input);
      input.click();
    });
  }

  // -------------------------------------------------------------------------
  // Textarea fallback (only used if Quill genuinely failed to load)
  // -------------------------------------------------------------------------
  function buildTextareaFallback(mountEl, opts) {
    var wrap = document.createElement('div');
    wrap.className = 'rt-wrap rt-wrap--fallback';
    var notice = document.createElement('div');
    notice.className = 'rt-fallback-notice';
    notice.textContent = 'Editor library did not load. Type plain text here — formatting will not be saved.';
    var ta = document.createElement('textarea');
    ta.className = 'rt-textarea';
    ta.placeholder = opts.placeholder || 'Write your article…';
    ta.value = (opts.initialHTML || '').replace(/<[^>]+>/g, '');
    wrap.appendChild(notice);
    wrap.appendChild(ta);
    mountEl.innerHTML = '';
    mountEl.appendChild(wrap);

    var debounceId = null;
    ta.addEventListener('input', function () {
      if (typeof opts.onChange !== 'function') return;
      if (debounceId) clearTimeout(debounceId);
      debounceId = setTimeout(function () {
        var text = ta.value;
        var html = text.split(/\n{2,}/).map(function (p) {
          return '<p>' + p.replace(/\n/g, '<br>') + '</p>';
        }).join('');
        opts.onChange(null, html);
      }, DEBOUNCE_MS);
    });

    return {
      editor: null,
      mode: 'textarea',
      getJSON: function () { return null; },
      getHTML: function () {
        var text = ta.value;
        return text.split(/\n{2,}/).map(function (p) {
          return '<p>' + p.replace(/\n/g, '<br>') + '</p>';
        }).join('');
      },
      setContent: function (input) {
        if (input == null) { ta.value = ''; return; }
        ta.value = typeof input === 'string' ? input.replace(/<[^>]+>/g, '') : '';
      },
      destroy: function () {
        if (debounceId) clearTimeout(debounceId);
        if (mountEl.contains(wrap)) mountEl.removeChild(wrap);
      }
    };
  }

  // -------------------------------------------------------------------------
  // Quill factory
  // -------------------------------------------------------------------------
  function buildQuill(mountEl, opts) {
    var wrap = document.createElement('div');
    wrap.className = 'rt-wrap rt-wrap--quill';

    var editorMount = document.createElement('div');
    editorMount.className = 'rt-editor';
    wrap.appendChild(editorMount);

    mountEl.innerHTML = '';
    mountEl.appendChild(wrap);

    // Toolbar definition — visible buttons match what the admin needs.
    var toolbarOptions = [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'code-block'],
      [{ align: [] }],
      ['link', 'image', 'video'],
      ['clean']
    ];

    var quill = new window.Quill(editorMount, {
      theme: 'snow',
      placeholder: opts.placeholder || 'Write your article…',
      modules: {
        toolbar: {
          container: toolbarOptions,
          handlers: {
            image: function () {
              pickImageFile().then(function (file) {
                if (!file) return;
                if (window.showToast) window.showToast('Uploading image…');
                uploadImage(file)
                  .then(function (url) {
                    if (!url) throw new Error('No public URL returned.');
                    var range = quill.getSelection(true);
                    quill.insertEmbed(range.index, 'image', url, 'user');
                    quill.setSelection(range.index + 1, 0);
                    if (window.showToast) window.showToast('Image inserted');
                  })
                  .catch(function (err) {
                    console.error('[editor] image upload failed', err);
                    if (window.showToast) window.showToast(err.message || 'Image upload failed', 'error');
                  });
              });
            }
          }
        }
      }
    });

    // Seed initial content. Prefer Delta JSON when present; otherwise convert HTML.
    if (opts.initialContent && typeof opts.initialContent === 'object' && opts.initialContent.ops) {
      quill.setContents(opts.initialContent, 'silent');
    } else if (opts.initialHTML) {
      // clipboard.dangerouslyPasteHTML is the supported Quill 2.x path
      quill.clipboard.dangerouslyPasteHTML(opts.initialHTML, 'silent');
    }

    var debounceId = null;
    quill.on('text-change', function (_delta, _old, source) {
      if (source !== 'user' && source !== 'api') return;
      if (typeof opts.onChange !== 'function') return;
      if (debounceId) clearTimeout(debounceId);
      debounceId = setTimeout(function () {
        try {
          opts.onChange(quill.getContents(), getCleanHTML(quill));
        } catch (e) {
          console.error('[editor] onChange callback threw', e);
        }
      }, DEBOUNCE_MS);
    });

    return {
      editor: quill,
      mode: 'quill',
      getJSON: function () { return quill.getContents(); },
      getHTML: function () { return getCleanHTML(quill); },
      setContent: function (input) {
        if (!input) { quill.setContents([{ insert: '\n' }], 'silent'); return; }
        if (typeof input === 'string') {
          quill.setContents([{ insert: '\n' }], 'silent');
          quill.clipboard.dangerouslyPasteHTML(input, 'silent');
          return;
        }
        if (input && input.ops) { quill.setContents(input, 'silent'); return; }
        quill.setContents([{ insert: '\n' }], 'silent');
      },
      destroy: function () {
        if (debounceId) clearTimeout(debounceId);
        if (mountEl.contains(wrap)) mountEl.removeChild(wrap);
      }
    };
  }

  function getCleanHTML(quill) {
    // Quill stores an empty doc as "<p><br></p>". Treat that as truly empty.
    var html = quill.root.innerHTML;
    if (html === '<p><br></p>') return '';
    return html;
  }

  // -------------------------------------------------------------------------
  // Public factory
  // -------------------------------------------------------------------------
  function create(mountEl, opts) {
    opts = opts || {};
    if (!mountEl) throw new Error('RichEditor.create: mountEl is required.');
    if (!quillReady()) {
      console.warn('[editor] Quill library did not load — using textarea fallback.');
      return buildTextareaFallback(mountEl, opts);
    }
    return buildQuill(mountEl, opts);
  }

  // Back-compat detector used by the sandbox page.
  function detectTipTap() {
    return quillReady() ? { Editor: window.Quill } : null;
  }

  window.RichEditor = {
    create: create,
    detectTipTap: detectTipTap,
    uploadImage: uploadImage
  };
})();
