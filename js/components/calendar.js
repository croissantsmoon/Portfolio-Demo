// Calendar widget — month grid with event dots, side panel for day details,
// and admin add/edit/delete via the shared EventModal.
//
// API:
//   window.PortfolioCalendar.mount(mountEl, pageKey)
//     pageKey: 'home' | 'mou' (filters by visible_on containing pageKey)
//   Returns { destroy, refresh }
(function () {
  var TYPE_COLORS = {
    meeting:           { color: '#4A6B8A', label: 'Meeting' },
    note:              { color: '#5C5C5C', label: 'Note' },
    article_published: { color: '#8B7355', label: 'Article' },
    other:             { color: '#4A5235', label: 'Other' }
  };

  function mount(mountEl, pageKey) {
    if (!mountEl) return null;
    var state = {
      pageKey: pageKey,
      cursor: startOfMonth(new Date()),
      events: [],          // for the current month window
      articles: [],        // for the linked-article dropdown (admin)
      selectedDate: null,  // ISO yyyy-mm-dd
      panelOpen: false,
      loading: false,
      error: null,
      adminListenerAttached: false
    };

    mountEl.innerHTML = shellHTML();
    bindShell(mountEl, state);
    paint(mountEl, state);
    loadEvents(state).then(function () { paint(mountEl, state); });
    if (window.IS_ADMIN) loadArticles(state);

    // Re-paint when admin status flips so add/edit affordances appear.
    var adminChangeHandler = null;
    if (window.AdminAuth && !state.adminListenerAttached) {
      state.adminListenerAttached = true;
      adminChangeHandler = function () {
        if (window.IS_ADMIN) loadArticles(state);
        paint(mountEl, state);
      };
      window.AdminAuth.onAdminChange(adminChangeHandler);
    }

    return {
      destroy: function () {
        if (adminChangeHandler && window.AdminAuth) {
          window.AdminAuth.offAdminChange(adminChangeHandler);
        }
        mountEl.innerHTML = '';
      },
      refresh: function () { return loadEvents(state).then(function () { paint(mountEl, state); }); }
    };
  }

  // -------------------------------------------------------------------------
  // Data
  // -------------------------------------------------------------------------
  async function loadEvents(state) {
    if (!window.sb) return;
    state.loading = true;
    state.error = null;
    // Pull a wide window (prev/current/next month) so prev/next clicks feel snappy.
    var from = isoDate(addDays(startOfMonth(state.cursor), -7));
    var to   = isoDate(addDays(endOfMonth(state.cursor), 14));
    try {
      var res = await window.sb.from('calendar_events')
        .select('*')
        .gte('event_date', from)
        .lte('event_date', to)
        .contains('visible_on', [state.pageKey])
        .order('event_date', { ascending: true })
        .order('event_time', { ascending: true, nullsFirst: true });
      if (res.error) throw res.error;
      state.events = res.data || [];
    } catch (err) {
      console.error('[calendar] fetch failed', err);
      state.events = [];
      state.error = err.message || 'Failed to load events.';
    }
    state.loading = false;
  }

  async function loadArticles(state) {
    if (!window.sb) return;
    var res = await window.sb.from('articles').select('id,title').order('updated_at', { ascending: false });
    if (!res.error) state.articles = res.data || [];
  }

  // -------------------------------------------------------------------------
  // Rendering
  // -------------------------------------------------------------------------
  function shellHTML() {
    return (
      '<div class="cal-wrap" data-cal-root="1">' +
        '<div class="cal-head">' +
          '<button type="button" class="cal-nav" data-cal-nav="prev" aria-label="Previous month">‹</button>' +
          '<div class="cal-title" data-cal-title>—</div>' +
          '<button type="button" class="cal-nav" data-cal-nav="next" aria-label="Next month">›</button>' +
          '<button type="button" class="cal-nav cal-today" data-cal-nav="today">Today</button>' +
        '</div>' +
        '<div class="cal-legend">' +
          legendChip('meeting') + legendChip('note') + legendChip('article_published') + legendChip('other') +
        '</div>' +
        '<div class="cal-grid" data-cal-grid></div>' +
        '<div class="cal-panel" data-cal-panel hidden></div>' +
      '</div>'
    );
  }

  function legendChip(type) {
    var c = TYPE_COLORS[type];
    return '<span class="cal-legend-chip"><span class="cal-dot" style="background:' + c.color + '"></span>' + c.label + '</span>';
  }

  function bindShell(mountEl, state) {
    mountEl.addEventListener('click', function (e) {
      var navBtn = e.target.closest('[data-cal-nav]');
      if (navBtn) {
        if (navBtn.dataset.calNav === 'prev')  state.cursor = addMonths(state.cursor, -1);
        if (navBtn.dataset.calNav === 'next')  state.cursor = addMonths(state.cursor,  1);
        if (navBtn.dataset.calNav === 'today') state.cursor = startOfMonth(new Date());
        paint(mountEl, state);
        loadEvents(state).then(function () { paint(mountEl, state); });
        return;
      }
      var addBtn = e.target.closest('[data-cal-add]');
      if (addBtn) {
        e.stopPropagation();
        openNewEvent(addBtn.dataset.calAdd, state, mountEl);
        return;
      }
      var dayCell = e.target.closest('[data-cal-day]');
      if (dayCell) {
        state.selectedDate = dayCell.dataset.calDay;
        state.panelOpen = true;
        paint(mountEl, state);
        return;
      }
      var panelClose = e.target.closest('[data-cal-panel-close]');
      if (panelClose) {
        state.panelOpen = false;
        paint(mountEl, state);
        return;
      }
      var evAction = e.target.closest('[data-cal-event-action]');
      if (evAction) {
        e.stopPropagation();
        var action = evAction.dataset.calEventAction;
        var id = evAction.dataset.eventId;
        var ev = state.events.find(function (x) { return x.id === id; });
        if (!ev) return;
        if (action === 'edit') openEditEvent(ev, state, mountEl);
        if (action === 'open-article') openLinkedArticle(ev);
        return;
      }
    });
  }

  function paint(mountEl, state) {
    var titleEl = mountEl.querySelector('[data-cal-title]');
    if (titleEl) titleEl.textContent = monthLabel(state.cursor);

    var grid = mountEl.querySelector('[data-cal-grid]');
    if (grid) grid.innerHTML = renderGrid(state);

    var panel = mountEl.querySelector('[data-cal-panel]');
    if (panel) {
      if (state.panelOpen && state.selectedDate) {
        panel.hidden = false;
        panel.innerHTML = renderPanel(state);
      } else {
        panel.hidden = true;
        panel.innerHTML = '';
      }
    }
  }

  function renderGrid(state) {
    var first = startOfMonth(state.cursor);
    var firstWeekday = first.getDay(); // 0 = Sun
    var monthStartCell = addDays(first, -firstWeekday);
    var todayIso = isoDate(new Date());
    var isAdmin = !!window.IS_ADMIN;

    var html = '<div class="cal-weekrow">' +
      ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        .map(function (d) { return '<span class="cal-weekday">' + d + '</span>'; }).join('') +
      '</div>';

    html += '<div class="cal-days">';
    for (var i = 0; i < 42; i++) {
      var d = addDays(monthStartCell, i);
      var iso = isoDate(d);
      var inMonth = d.getMonth() === first.getMonth();
      var isToday = iso === todayIso;
      var isSelected = iso === state.selectedDate;
      var dayEvents = state.events.filter(function (e) { return e.event_date === iso; });

      var dots = '';
      var shown = Math.min(dayEvents.length, 3);
      for (var k = 0; k < shown; k++) {
        var c = (TYPE_COLORS[dayEvents[k].event_type] || TYPE_COLORS.other).color;
        dots += '<span class="cal-day-dot" style="background:' + c + '"></span>';
      }
      var more = dayEvents.length > 3
        ? '<span class="cal-day-more">+' + (dayEvents.length - 3) + '</span>'
        : '';

      var classes = ['cal-day'];
      if (!inMonth)   classes.push('is-out');
      if (isToday)    classes.push('is-today');
      if (isSelected) classes.push('is-selected');

      html += '<button type="button" class="' + classes.join(' ') + '" data-cal-day="' + iso + '" aria-label="' + iso + ' — ' + dayEvents.length + ' event(s)">' +
        '<span class="cal-day-num">' + d.getDate() + '</span>' +
        (dots || more
          ? '<span class="cal-day-dots">' + dots + more + '</span>'
          : '<span class="cal-day-dots"></span>'
        ) +
        (isAdmin
          ? '<span class="cal-day-add admin-only" data-cal-add="' + iso + '" aria-label="Add event">+</span>'
          : '') +
      '</button>';
    }
    html += '</div>';
    return html;
  }

  function renderPanel(state) {
    var iso = state.selectedDate;
    var dayEvents = state.events.filter(function (e) { return e.event_date === iso; });
    var label = humanDate(iso);

    var body = '';
    if (!dayEvents.length) {
      body = '<p class="cal-panel-empty">No events on this date.' +
        (window.IS_ADMIN
          ? ' <button class="admin-btn admin-btn-ghost" style="padding:4px 10px;font-size:.78rem" data-cal-add="' + iso + '">+ Add</button>'
          : '') +
        '</p>';
    } else {
      body = dayEvents.map(function (ev) { return renderEventItem(ev); }).join('');
    }

    return (
      '<div class="cal-panel-inner">' +
        '<div class="cal-panel-head">' +
          '<div>' +
            '<div class="label-small">' + escapeHtml(state.pageKey === 'mou' ? 'Coordination' : "What's happening") + '</div>' +
            '<div class="cal-panel-date">' + escapeHtml(label) + '</div>' +
          '</div>' +
          (window.IS_ADMIN
            ? '<button class="admin-btn admin-btn-primary" data-cal-add="' + iso + '" style="padding:6px 14px;font-size:.78rem">+ Add event</button>'
            : '') +
          '<button class="cal-panel-close" data-cal-panel-close="1" aria-label="Close">×</button>' +
        '</div>' +
        '<div class="cal-panel-list">' + body + '</div>' +
      '</div>'
    );
  }

  function renderEventItem(ev) {
    var t = TYPE_COLORS[ev.event_type] || TYPE_COLORS.other;
    var time = ev.event_time ? prettyTime(ev.event_time) : '';
    var isAdmin = !!window.IS_ADMIN;
    var hasArticle = !!ev.linked_article_id;
    var notesHTML = ev.notes ? '<div class="cal-event-notes">' + markdownLite(ev.notes) + '</div>' : '';

    return (
      '<div class="cal-event">' +
        '<div class="cal-event-bar" style="background:' + t.color + '"></div>' +
        '<div class="cal-event-body">' +
          '<div class="cal-event-meta">' +
            '<span class="cal-event-type" style="color:' + t.color + '">' + t.label + '</span>' +
            (time ? '<span class="cal-event-time">' + escapeHtml(time) + '</span>' : '') +
            (ev.location ? '<span class="cal-event-loc">· ' + escapeHtml(ev.location) + '</span>' : '') +
          '</div>' +
          '<div class="cal-event-title">' + escapeHtml(ev.title || '') + '</div>' +
          (ev.description ? '<div class="cal-event-desc">' + escapeHtml(ev.description) + '</div>' : '') +
          notesHTML +
          '<div class="cal-event-actions">' +
            (hasArticle
              ? '<button class="cal-event-link" data-cal-event-action="open-article" data-event-id="' + ev.id + '">Read article →</button>'
              : '') +
            (isAdmin
              ? '<button class="cal-event-edit admin-only" data-cal-event-action="edit" data-event-id="' + ev.id + '">Edit</button>'
              : '') +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  // -------------------------------------------------------------------------
  // Admin actions
  // -------------------------------------------------------------------------
  function openNewEvent(iso, state, mountEl) {
    if (!window.IS_ADMIN || !window.EventModal) return;
    window.EventModal.open({
      defaultDate: iso,
      defaultPage: state.pageKey,
      articles: state.articles,
      onSaved: function (saved) {
        // Optimistic add to the in-memory list, then refetch for consistency.
        if (saved && (saved.visible_on || []).indexOf(state.pageKey) !== -1) {
          state.events.push(saved);
        }
        state.selectedDate = saved ? saved.event_date : state.selectedDate;
        state.panelOpen = true;
        paint(mountEl, state);
        loadEvents(state).then(function () { paint(mountEl, state); });
      }
    });
  }

  function openEditEvent(ev, state, mountEl) {
    if (!window.IS_ADMIN || !window.EventModal) return;
    window.EventModal.open({
      event: ev,
      defaultPage: state.pageKey,
      articles: state.articles,
      onSaved: function (saved) {
        var idx = state.events.findIndex(function (x) { return x.id === ev.id; });
        if (idx >= 0) state.events[idx] = saved;
        state.selectedDate = saved.event_date;
        paint(mountEl, state);
        loadEvents(state).then(function () { paint(mountEl, state); });
      },
      onDeleted: function (id) {
        state.events = state.events.filter(function (x) { return x.id !== id; });
        paint(mountEl, state);
      }
    });
  }

  async function openLinkedArticle(ev) {
    if (!ev.linked_article_id || !window.sb) return;
    var res = await window.sb.from('articles').select('slug').eq('id', ev.linked_article_id).maybeSingle();
    if (res.error || !res.data) {
      window.showToast && window.showToast('Linked article not found', 'error');
      return;
    }
    if (window.goToPage) window.goToPage('writing');
    if (window.WritingPage && typeof window.WritingPage.goReader === 'function') {
      window.WritingPage.goReader(res.data.slug);
    } else {
      // Fallback for early page-load; defer a tick.
      setTimeout(function () {
        if (window.WritingPage) window.WritingPage.goReader(res.data.slug);
      }, 60);
    }
  }

  // -------------------------------------------------------------------------
  // Helpers
  // -------------------------------------------------------------------------
  function startOfMonth(d) { return new Date(d.getFullYear(), d.getMonth(), 1); }
  function endOfMonth(d)   { return new Date(d.getFullYear(), d.getMonth() + 1, 0); }
  function addMonths(d, n) { return new Date(d.getFullYear(), d.getMonth() + n, 1); }
  function addDays(d, n)   { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
  function isoDate(d) {
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var dd = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + mm + '-' + dd;
  }
  function monthLabel(d) {
    return d.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
  }
  function humanDate(iso) {
    try {
      var parts = iso.split('-').map(Number);
      var d = new Date(parts[0], parts[1] - 1, parts[2]);
      return d.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    } catch (e) { return iso; }
  }
  function prettyTime(t) {
    // expects HH:MM[:SS]; render 24h trimmed to HH:MM
    return (t || '').slice(0, 5);
  }
  function escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  // Tiny Markdown subset for event notes: bold, italics, inline code, links, line breaks.
  function markdownLite(src) {
    var esc = escapeHtml(src);
    esc = esc.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    esc = esc.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
    esc = esc.replace(/`([^`]+)`/g, '<code>$1</code>');
    esc = esc.replace(/\[([^\]]+)\]\((https?:[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    esc = esc.replace(/\n/g, '<br>');
    return esc;
  }

  window.PortfolioCalendar = { mount: mount };
})();
