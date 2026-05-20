// Reusable TipTap-based rich-text editor with image upload to Supabase storage.
//
// API:
//   window.RichEditor.create(mountEl, { initialContent, initialHTML, onChange, placeholder })
//     → returns { editor, mode, getJSON, getHTML, setContent, destroy }
//
//   `mode` is 'tiptap' when the UMD bundles loaded, otherwise 'textarea'.
//   `onChange(json, html)` is called debounced ~500ms.
//
// Image uploads go to the `article-images` bucket via window.sb; they require
// the admin to be signed in (enforced server-side by RLS storage policies).
(function () {
  var BUCKET = 'article-images';
  var DEBOUNCE_MS = 500;

  // -------------------------------------------------------------------------
  // TipTap UMD detection — the bundles expose differently-cased globals
  // depending on the build. We probe several names and unwrap `.default`
  // when present.
  // -------------------------------------------------------------------------
  function pickGlobal(names) {
    for (var i = 0; i < names.length; i++) {
      var g = window[names[i]];
      if (g) return g;
    }
    return null;
  }

  function unwrap(mod, key) {
    if (!mod) return null;
    if (key && mod[key]) return mod[key];
    if (mod.default) return mod.default;
    return mod;
  }

  function detectTipTap() {
    var core = pickGlobal(['Tiptap', 'tiptap', 'TiptapCore', 'tiptapCore']);
    if (!core || !core.Editor) return null;

    var starterMod = pickGlobal(['TiptapStarterKit', 'tiptapStarterKit']);
    var imageMod   = pickGlobal(['TiptapImage', 'tiptapImage']);
    var linkMod    = pickGlobal(['TiptapLink', 'tiptapLink']);
    var tableMod   = pickGlobal(['TiptapTable', 'tiptapTable']);
    var trMod      = pickGlobal(['TiptapTableRow', 'tiptapTableRow']);
    var tcMod      = pickGlobal(['TiptapTableCell', 'tiptapTableCell']);
    var thMod      = pickGlobal(['TiptapTableHeader', 'tiptapTableHeader']);
    var ytMod      = pickGlobal(['TiptapYoutube', 'tiptapYoutube']);

    var StarterKit = unwrap(starterMod, 'StarterKit');
    if (!StarterKit) return null;

    return {
      Editor: core.Editor,
      StarterKit: StarterKit,
      Image:       unwrap(imageMod, 'Image'),
      Link:        unwrap(linkMod,  'Link'),
      Table:       unwrap(tableMod, 'Table'),
      TableRow:    unwrap(trMod,    'TableRow'),
      TableCell:   unwrap(tcMod,    'TableCell'),
      TableHeader: unwrap(thMod,    'TableHeader'),
      Youtube:     unwrap(ytMod,    'Youtube')
    };
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
  // Toolbar
  // -------------------------------------------------------------------------
  var TOOLBAR_BUTTONS = [
    { id: 'bold',       label: 'B',     title: 'Bold (Cmd/Ctrl+B)',           style: 'font-weight:700' },
    { id: 'italic',     label: 'I',     title: 'Italic (Cmd/Ctrl+I)',         style: 'font-style:italic' },
    { id: 'strike',     label: 'S',     title: 'Strikethrough',               style: 'text-decoration:line-through' },
    { id: 'code',       label: '< >',   title: 'Inline code',                 style: 'font-family:monospace;font-size:.8rem' },
    { sep: true },
    { id: 'h1',         label: 'H1',    title: 'Heading 1' },
    { id: 'h2',         label: 'H2',    title: 'Heading 2' },
    { id: 'h3',         label: 'H3',    title: 'Heading 3' },
    { id: 'paragraph',  label: '¶',     title: 'Paragraph' },
    { sep: true },
    { id: 'bulletList', label: '• List',title: 'Bullet list' },
    { id: 'orderedList',label: '1. List',title: 'Ordered list' },
    { id: 'blockquote', label: '❝',     title: 'Blockquote' },
    { id: 'codeBlock',  label: '{ }',   title: 'Code block' },
    { id: 'hr',         label: '—',     title: 'Horizontal rule' },
    { sep: true },
    { id: 'link',       label: '🔗',    title: 'Add link' },
    { id: 'unlink',     label: '⛓✕',   title: 'Remove link' },
    { id: 'image',      label: 'IMG',   title: 'Upload image' },
    { id: 'table',      label: '▦',     title: 'Insert table (3×3)' },
    { id: 'youtube',    label: '▶',     title: 'Embed YouTube' },
    { sep: true },
    { id: 'undo',       label: '↶',     title: 'Undo' },
    { id: 'redo',       label: '↷',     title: 'Redo' }
  ];

  function buildToolbar(editor) {
    var bar = document.createElement('div');
    bar.className = 'rt-toolbar';
    bar.setAttribute('role', 'toolbar');
    bar.setAttribute('aria-label', 'Rich text editor toolbar');

    var buttons = {};
    TOOLBAR_BUTTONS.forEach(function (spec) {
      if (spec.sep) {
        var sep = document.createElement('span');
        sep.className = 'rt-toolbar-sep';
        sep.setAttribute('aria-hidden', 'true');
        bar.appendChild(sep);
        return;
      }
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'rt-btn';
      btn.title = spec.title;
      btn.setAttribute('aria-label', spec.title);
      btn.dataset.cmd = spec.id;
      btn.textContent = spec.label;
      if (spec.style) btn.style.cssText = spec.style;
      bar.appendChild(btn);
      buttons[spec.id] = btn;
    });

    bar.addEventListener('click', function (e) {
      var t = e.target;
      if (!t || !t.dataset || !t.dataset.cmd) return;
      e.preventDefault();
      runCommand(editor, t.dataset.cmd);
    });

    function syncActive() {
      Object.keys(buttons).forEach(function (id) {
        var active = false;
        try {
          switch (id) {
            case 'bold':       active = editor.isActive('bold'); break;
            case 'italic':     active = editor.isActive('italic'); break;
            case 'strike':     active = editor.isActive('strike'); break;
            case 'code':       active = editor.isActive('code'); break;
            case 'h1':         active = editor.isActive('heading', { level: 1 }); break;
            case 'h2':         active = editor.isActive('heading', { level: 2 }); break;
            case 'h3':         active = editor.isActive('heading', { level: 3 }); break;
            case 'paragraph':  active = editor.isActive('paragraph'); break;
            case 'bulletList': active = editor.isActive('bulletList'); break;
            case 'orderedList':active = editor.isActive('orderedList'); break;
            case 'blockquote': active = editor.isActive('blockquote'); break;
            case 'codeBlock':  active = editor.isActive('codeBlock'); break;
            case 'link':       active = editor.isActive('link'); break;
          }
        } catch (e) { /* extension not loaded */ }
        buttons[id].classList.toggle('is-active', active);
      });
    }
    editor.on('selectionUpdate', syncActive);
    editor.on('transaction', syncActive);
    syncActive();

    return bar;
  }

  function runCommand(editor, cmd) {
    var chain = editor.chain().focus();
    switch (cmd) {
      case 'bold':        chain.toggleBold().run(); return;
      case 'italic':      chain.toggleItalic().run(); return;
      case 'strike':      chain.toggleStrike().run(); return;
      case 'code':        chain.toggleCode().run(); return;
      case 'h1':          chain.toggleHeading({ level: 1 }).run(); return;
      case 'h2':          chain.toggleHeading({ level: 2 }).run(); return;
      case 'h3':          chain.toggleHeading({ level: 3 }).run(); return;
      case 'paragraph':   chain.setParagraph().run(); return;
      case 'bulletList':  chain.toggleBulletList().run(); return;
      case 'orderedList': chain.toggleOrderedList().run(); return;
      case 'blockquote':  chain.toggleBlockquote().run(); return;
      case 'codeBlock':   chain.toggleCodeBlock().run(); return;
      case 'hr':          chain.setHorizontalRule().run(); return;
      case 'undo':        chain.undo().run(); return;
      case 'redo':        chain.redo().run(); return;
      case 'link': {
        var prev = editor.getAttributes('link').href || '';
        var url = window.prompt('Link URL:', prev);
        if (url === null) return;
        if (url === '') { chain.unsetLink().run(); return; }
        chain.extendMarkRange('link').setLink({ href: url, target: '_blank', rel: 'noopener noreferrer' }).run();
        return;
      }
      case 'unlink':      chain.unsetLink().run(); return;
      case 'table':       chain.insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run(); return;
      case 'youtube': {
        var yt = window.prompt('YouTube URL:');
        if (!yt) return;
        try { editor.commands.setYoutubeVideo({ src: yt, width: 640, height: 360 }); }
        catch (e) { window.alert('YouTube embed extension is not available.'); }
        return;
      }
      case 'image': {
        pickImageFile().then(function (file) {
          if (!file) return;
          if (window.showToast) window.showToast('Uploading image…');
          uploadImage(file)
            .then(function (url) {
              if (!url) throw new Error('No public URL returned.');
              editor.chain().focus().setImage({ src: url, alt: file.name || '' }).run();
              if (window.showToast) window.showToast('Image inserted');
            })
            .catch(function (err) {
              console.error('[editor] image upload failed', err);
              if (window.showToast) window.showToast(err.message || 'Image upload failed', 'error');
            });
        });
        return;
      }
    }
  }

  // -------------------------------------------------------------------------
  // Textarea fallback (used when TipTap UMD bundles fail to load)
  // -------------------------------------------------------------------------
  function buildTextareaFallback(mountEl, opts) {
    var wrap = document.createElement('div');
    wrap.className = 'rt-wrap rt-wrap--fallback';
    var notice = document.createElement('div');
    notice.className = 'rt-fallback-notice';
    notice.textContent = 'Rich text editor unavailable — using plain HTML editor. Paste HTML directly; it will be saved as-is.';
    var ta = document.createElement('textarea');
    ta.className = 'rt-textarea';
    ta.placeholder = opts.placeholder || 'Write your article…';
    ta.value = opts.initialHTML || '';
    wrap.appendChild(notice);
    wrap.appendChild(ta);
    mountEl.innerHTML = '';
    mountEl.appendChild(wrap);

    var debounceId = null;
    function notify() {
      if (typeof opts.onChange !== 'function') return;
      if (debounceId) clearTimeout(debounceId);
      debounceId = setTimeout(function () {
        var html = ta.value;
        opts.onChange(null, html);
      }, DEBOUNCE_MS);
    }
    ta.addEventListener('input', notify);

    return {
      editor: null,
      mode: 'textarea',
      getJSON: function () { return null; },
      getHTML: function () { return ta.value; },
      setContent: function (input) {
        if (input == null) { ta.value = ''; return; }
        if (typeof input === 'string') { ta.value = input; return; }
        try { ta.value = JSON.stringify(input); } catch (e) { ta.value = ''; }
      },
      destroy: function () {
        if (debounceId) clearTimeout(debounceId);
        if (mountEl.contains(wrap)) mountEl.removeChild(wrap);
      }
    };
  }

  // -------------------------------------------------------------------------
  // Main factory
  // -------------------------------------------------------------------------
  function create(mountEl, opts) {
    opts = opts || {};
    if (!mountEl) throw new Error('RichEditor.create: mountEl is required.');

    var tt = detectTipTap();
    if (!tt) {
      console.warn('[editor] TipTap UMD bundles not available — using textarea fallback.');
      return buildTextareaFallback(mountEl, opts);
    }

    // Build extensions list (skip any that failed to load individually).
    var extensions = [tt.StarterKit.configure({
      // We want link as a separate extension for the toolbar buttons below.
      // StarterKit ships link in newer versions — disabling here avoids
      // duplicate-mark warnings if both are present.
      link: false
    })];
    if (tt.Image)       extensions.push(tt.Image.configure({ inline: false, allowBase64: false }));
    if (tt.Link)        extensions.push(tt.Link.configure({ openOnClick: false, autolink: true }));
    if (tt.Table)       extensions.push(tt.Table.configure({ resizable: true }));
    if (tt.TableRow)    extensions.push(tt.TableRow);
    if (tt.TableHeader) extensions.push(tt.TableHeader);
    if (tt.TableCell)   extensions.push(tt.TableCell);
    if (tt.Youtube)     extensions.push(tt.Youtube.configure({ controls: true }));

    var wrap = document.createElement('div');
    wrap.className = 'rt-wrap';
    var toolbarMount = document.createElement('div');
    var editorMount = document.createElement('div');
    editorMount.className = 'rt-editor';
    if (opts.placeholder) editorMount.setAttribute('aria-label', opts.placeholder);
    wrap.appendChild(toolbarMount);
    wrap.appendChild(editorMount);
    mountEl.innerHTML = '';
    mountEl.appendChild(wrap);

    var initial = opts.initialContent || opts.initialHTML || '<p></p>';

    var debounceId = null;
    var editor = new tt.Editor({
      element: editorMount,
      extensions: extensions,
      content: initial,
      autofocus: false,
      onUpdate: function (_ref) {
        if (typeof opts.onChange !== 'function') return;
        if (debounceId) clearTimeout(debounceId);
        debounceId = setTimeout(function () {
          try {
            opts.onChange(editor.getJSON(), editor.getHTML());
          } catch (e) {
            console.error('[editor] onChange callback threw', e);
          }
        }, DEBOUNCE_MS);
      }
    });

    var toolbar = buildToolbar(editor);
    toolbarMount.replaceWith(toolbar);

    return {
      editor: editor,
      mode: 'tiptap',
      getJSON: function () { return editor.getJSON(); },
      getHTML: function () { return editor.getHTML(); },
      setContent: function (content) { editor.commands.setContent(content || '<p></p>'); },
      destroy: function () {
        if (debounceId) clearTimeout(debounceId);
        try { editor.destroy(); } catch (e) {}
        if (mountEl.contains(wrap)) mountEl.removeChild(wrap);
      }
    };
  }

  window.RichEditor = { create: create, detectTipTap: detectTipTap, uploadImage: uploadImage };
})();
