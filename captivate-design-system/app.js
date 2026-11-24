/* Captivate onboarding map: renders lanes, stage details, FAQ and team from content.js */
(function () {
  var C = window.CAPTIVATE_CONTENT;
  var STAGES = C.STAGES, FAQS = C.FAQS, TEAM = C.TEAM;

  var root = document.getElementById("cr");
  if (!root) return;
  var COLOR = { exp: "var(--ar-exp)", cap: "var(--ar-accent)" };
  var LABEL_CLASS = { "You do": "lbl-do", "You get": "lbl-get", "eXp handles": "lbl-exp" };
  var PATH_NAME = { exp: "eXp", cap: "Captivate" };
  var state = { path: "exp", sel: { exp: 0, cap: 0 }, faq: 0 };
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var SCROLL = reduceMotion ? "auto" : "smooth";

  /* Turns email addresses into mailto: links and web addresses into links that
     open in a new tab. Text is escaped first, so it's safe. */
  function linkify(text) {
    return esc(text).replace(/([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})|((?:https?:\/\/)?(?:[A-Za-z0-9-]+\.)+(?:com|net|org|io|co)(?:\/[^\s<]*)?)/g,
      function (m, email, url) {
        if (email) return '<a class="ar-inline-link" href="mailto:' + email + '">' + email + "</a>";
        var trail = (url.match(/[.,;:!?)]+$/) || [""])[0];
        var clean = trail ? url.slice(0, -trail.length) : url;
        var href = /^https?:/i.test(clean) ? clean : "https://" + clean;
        return '<a class="ar-inline-link" href="' + href + '" target="_blank" rel="noopener">' + clean + "</a>" + trail;
      });
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(id) { return document.getElementById(id); }

  function stopHTML(path, s, i, active, withTag, asLink) {
    var tagName = asLink ? "a" : "button";
    var attrs = asLink ? ' href="#ar-details"' : ' type="button"';
    return "<" + tagName + attrs + ' class="ar-stop' + (active ? " is-active" : "") + '" data-open="' + path + "-" + i + '"' +
      ' aria-label="' + esc(PATH_NAME[path] + " stage " + (i + 1) + ": " + s.name) + '"' +
      (asLink ? "" : ' aria-pressed="' + active + '"') + ' style="--c:' + COLOR[path] + '">' +
      '<span class="ar-dot' + (s.sticky ? " sticky" : "") + '">' + (i + 1) + "</span>" +
      '<span class="ar-stop-name">' + esc(s.name) + "</span>" +
      (withTag ? '<span class="ar-stop-tag">' + esc(s.tag) + "</span>" : "") +
      "</" + tagName + ">";
  }

  function renderLanes() {
    ["exp", "cap"].forEach(function (p) {
      $("ar-lane-" + p).innerHTML = STAGES[p].map(function (s, i) { return stopHTML(p, s, i, false, true, true); }).join("");
    });
  }

  function renderDetails() {
    var path = state.path, list = STAGES[path], sel = state.sel[path], s = list[sel];
    $("ar-tab-exp").setAttribute("aria-selected", path === "exp");
    $("ar-tab-cap").setAttribute("aria-selected", path === "cap");
    $("ar-path-sub").innerHTML = path === "exp"
      ? 'Joining the brokerage. <a href="#ar-faq" data-faq-open="0" style="font-weight:700">Already with eXp? Start here</a>'
      : "Your Captivate onboarding. It all starts the moment your welcome email lands.";
    var stepper = $("ar-stepper");
    stepper.style.setProperty("--line", path === "exp" ? "var(--ar-exp-line)" : "var(--ar-accent-line)");
    stepper.style.minWidth = (list.length * 110) + "px";
    stepper.innerHTML = list.map(function (st, i) { return stopHTML(path, st, i, i === sel, false, false); }).join("");

    var html = '<span class="ar-kicker">' + PATH_NAME[path] + " path · Stage " + (sel + 1) + " of " + list.length + "</span>" +
      "<h3>" + esc(s.name) + "</h3>" +
      (s.intro ? '<p class="ar-intro">' + esc(s.intro) + "</p>" : "") +
      s.items.map(function (it) {
        return '<div class="ar-item"><span class="ar-item-label ' + (LABEL_CLASS[it[0]] || "lbl-do") + '">' + esc(it[0]) + "</span><span>" + linkify(it[1]) + "</span></div>";
      }).join("") +
      s.notes.map(function (n) {
        return '<div class="ar-note' + (n[0] === "Heads up" ? " heads" : "") + '"><b>' + esc(n[0]) + "</b><span>" + linkify(n[1]) + "</span></div>";
      }).join("");
    var main = $("ar-detail-main");
    main.innerHTML = html;
    main.style.animation = "none"; void main.offsetWidth; main.style.animation = "";
    $("ar-prev").disabled = sel === 0;
    $("ar-next").disabled = sel === list.length - 1;
  }

  function renderFAQ() {
    $("ar-faq-list").innerHTML = FAQS.map(function (f, i) {
      var open = state.faq === i;
      return '<div class="ar-q' + (open ? " open" : "") + '"><button type="button" data-faq="' + i + '" aria-expanded="' + open + '">' +
        "<span>" + esc(f[0]) + '</span><span class="ar-plus" aria-hidden="true">+</span></button>' +
        (open ? '<div class="ar-a">' + f[1].split("\n").map(function (line) { return "<p>" + linkify(line).replace(/^([^:<]{3,40}:)/, "<b>$1</b>") + "</p>"; }).join("") + "</div>" : "") + "</div>";
    }).join("");
  }

  var ICON_MAIL = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>';
  var ICON_PHONE = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>';

  function renderTeam() {
    var list = $("ar-team-list");
    list.innerHTML = TEAM.map(function (p, i) {
      var face = p.photo
        ? '<img src="' + esc(p.photo) + '" alt="' + esc(p.name) + '" loading="lazy" data-i="' + i + '" style="--zoom:' + (p.zoom || 1) + '">'
        : esc(p.initials);
      var contact = "";
      if (p.email) contact += '<a href="mailto:' + esc(p.email) + '">' + ICON_MAIL + "<span>" + esc(p.email) + "</span></a>";
      if (p.phone) contact += '<a href="tel:+1' + p.phone.replace(/\D/g, "") + '">' + ICON_PHONE + "<span>" + esc(p.phone) + "</span></a>";
      return '<div class="ar-person"><div class="ar-avatar">' + face + "</div>" +
        "<b>" + esc(p.name) + '</b><span class="ar-role">' + esc(p.role) + "</span><p>" + esc(p.about) + "</p>" +
        (contact ? '<div class="ar-contact">' + contact + "</div>" : "") + "</div>";
    }).join("");
    /* If a photo can't load, show the person's initials instead */
    list.querySelectorAll("img[data-i]").forEach(function (img) {
      function fallback() { var box = img.parentNode; if (box) box.textContent = TEAM[+img.getAttribute("data-i")].initials; }
      if (img.complete && img.naturalWidth === 0 && img.src) { fallback(); return; }
      img.addEventListener("error", fallback);
    });
  }

  function open(path, i) {
    state.path = path; state.sel[path] = i; renderDetails();
  }

  root.addEventListener("click", function (e) {
    var t = e.target.closest("[data-open],[data-path],[data-faq],[data-faq-open],#ar-prev,#ar-next");
    if (!t || !root.contains(t)) return;
    if (t.hasAttribute("data-faq-open")) {
      e.preventDefault();
      state.faq = parseInt(t.getAttribute("data-faq-open"), 10); renderFAQ();
      var q = root.querySelector('[data-faq="' + state.faq + '"]');
      (q || $("ar-faq")).scrollIntoView({ behavior: SCROLL, block: "center" });
    } else if (t.hasAttribute("data-open")) {
      var parts = t.getAttribute("data-open").split("-");
      open(parts[0], parseInt(parts[1], 10));
      if (t.tagName === "A") {
        e.preventDefault();
        $("ar-details").scrollIntoView({ behavior: SCROLL, block: "start" });
      }
    } else if (t.hasAttribute("data-path")) {
      state.path = t.getAttribute("data-path"); renderDetails();
    } else if (t.hasAttribute("data-faq")) {
      var i = parseInt(t.getAttribute("data-faq"), 10);
      state.faq = state.faq === i ? -1 : i; renderFAQ();
    } else if (t.id === "ar-prev" || t.id === "ar-next") {
      var max = STAGES[state.path].length - 1, cur = state.sel[state.path];
      open(state.path, t.id === "ar-prev" ? Math.max(0, cur - 1) : Math.min(max, cur + 1));
      /* On phones the buttons sit below the stage text, so bring the new stage into view */
      if (root.classList.contains("ar-compact")) {
        $("ar-stepper").scrollIntoView({ behavior: SCROLL, block: "start" });
      }
    }
  });

  /* Smooth scroll for in-page nav links */
  root.querySelectorAll('a[href^="#ar-"]:not([data-open]):not([data-faq-open])').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var target = document.querySelector(a.getAttribute("href"));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: SCROLL, block: "start" }); }
    });
  });

  /* Responsive switch: measure the page's real width and toggle layout classes */
  function applyLayout() {
    var w = Math.min(root.getBoundingClientRect().width || 9999, window.innerWidth || 9999, (window.screen && window.screen.width) || 9999);
    root.classList.toggle("ar-compact", w < 820);
    root.classList.toggle("ar-phone", w < 560);
  }
  applyLayout();
  if (window.ResizeObserver) { new ResizeObserver(applyLayout).observe(root); }
  window.addEventListener("resize", applyLayout);
  window.addEventListener("orientationchange", applyLayout);

  renderLanes(); renderDetails(); renderFAQ(); renderTeam();
})();
