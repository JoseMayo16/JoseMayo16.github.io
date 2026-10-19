(function () {
  var S = window.SITE;
  var root = document.documentElement;
  var lang = "es";
  var intel = null; // summary.json de Jobs Pulse, si cargo

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) {
      return null;
    }
  }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { node.appendChild(c); });
    return node;
  }

  function fill(container, nodes) {
    container.replaceChildren.apply(container, nodes);
  }

  var githubUrl = "https://github.com/" + S.githubUser;

  // --- datos fijos (no dependen del idioma) ---------------------------------

  document.querySelectorAll("[data-name]").forEach(function (n) { n.textContent = S.name; });
  document.querySelectorAll("[data-github-user]").forEach(function (n) { n.textContent = S.githubUser.toLowerCase(); });
  document.querySelector("[data-year]").textContent = new Date().getFullYear();
  var photo = document.querySelector("[data-photo]");
  photo.src = S.photo;
  photo.alt = S.name;
  fill(document.querySelector("[data-loadout]"), S.loadout.map(function (x) { return el("li", { text: x }); }));

  // --- render por idioma ----------------------------------------------------

  // "573016612888" -> "+57 301 661 2888" (country code + 10-digit number); otherwise as-is.
  function phoneLabel(digits) {
    if (digits.length !== 12) return "+" + digits;
    return "+" + digits.slice(0, 2) + " " + digits.slice(2, 5) + " " + digits.slice(5, 8) + " " + digits.slice(8);
  }

  function renderLog(t) {
    fill(document.querySelector("[data-log]"), t["about.items"].map(function (it) {
      var kids = [el("strong", { text: it.t })];
      if (it.m) kids.push(el("span", { class: "log-when mono", text: it.m }));
      kids.push(el("span", { text: it.d }));
      return el("li", {}, kids);
    }));
  }

  function renderCases(t) {
    fill(document.querySelector("[data-cases]"), S.projects.map(function (p, i) {
      var c = p[lang];
      var links = [];
      if (p.demo) links.push(el("a", { class: "btn btn-primary btn-sm", href: p.demo, target: "_blank", rel: "noopener", text: t["work.demo"] }));
      if (p.repo) links.push(el("a", { class: "btn btn-ghost btn-sm", href: p.repo, target: "_blank", rel: "noopener", text: t["work.code"] }));
      var rows = ["problem", "build", "result"].map(function (k) {
        return el("div", { class: "case-row" }, [el("dt", { class: "mono", text: t["work." + k] }), el("dd", { text: c[k] })]);
      });
      var img = el("img", { src: p.image, alt: "", loading: "lazy", width: "800", height: "500" });
      var href = p.demo || p.repo;
      var media = href
        ? el("a", { class: "case-media", href: href, target: "_blank", rel: "noopener", tabindex: "-1", "aria-hidden": "true" }, [img])
        : el("div", { class: "case-media", "aria-hidden": "true" }, [img]);
      var id = t["work.case"] + " " + String(i + 1).padStart(2, "0") + (p.client ? " · " + t["work.client"] : "");
      return el("article", { class: "case hud" }, [
        media,
        el("div", { class: "case-body" }, [
          el("p", { class: "case-id mono", text: id }),
          el("h3", { text: p.title }),
          el("dl", { class: "case-rows" }, rows),
          el("ul", { class: "chips" }, p.tags.map(function (x) { return el("li", { text: x }); })),
          el("div", { class: "case-links" }, links),
        ]),
      ]);
    }));
  }

  function renderHelp(t) {
    fill(document.querySelector("[data-help]"), t["help.items"].map(function (it) {
      return el("li", { class: "hud" }, [
        el("span", { class: "help-key mono", text: "[" + it.k + "]" }),
        el("h3", { text: it.t }),
        el("p", { text: it.d }),
      ]);
    }));
    fill(document.querySelector("[data-steps]"), t["help.steps"].map(function (it, i) {
      return el("li", {}, [
        el("span", { class: "step-n mono", text: String(i + 1).padStart(2, "0") }),
        el("strong", { text: it.t }),
        el("span", { text: it.d }),
      ]);
    }));
  }

  function renderContact(t) {
    var c = S.contact;
    var links = [];
    if (c.email) links.push(["email", "mailto:" + c.email, c.email]);
    if (c.whatsapp) links.push(["whatsapp", "https://wa.me/" + c.whatsapp, phoneLabel(c.whatsapp)]);
    if (c.linkedin) links.push(["linkedin", c.linkedin, c.linkedin.replace(/^https?:\/\/(www\.)?/, "")]);
    links.push(["github", githubUrl, "github.com/" + S.githubUser]);
    fill(document.querySelector("[data-contact]"), links.map(function (l, i) {
      var attrs = { href: l[1], class: "contact-link" + (i === 0 ? " is-primary" : "") };
      if (l[0] !== "email") { attrs.target = "_blank"; attrs.rel = "noopener"; }
      return el("a", attrs, [
        el("span", { class: "contact-label mono", text: t["contact." + l[0]] }),
        el("span", { class: "contact-value", text: l[2] }),
        el("span", { class: "contact-arrow mono", "aria-hidden": "true", text: "->" }),
      ]);
    }));
  }

  function renderIntel(t) {
    if (!intel) return;
    var b = intel.boards;
    var mine = S.myStack.map(function (x) { return x.toLowerCase(); });
    var top = b.skills.slice(0, 10);
    var max = top[0].share;
    var pct = new Intl.NumberFormat(lang, { style: "percent", maximumFractionDigits: 0 });
    var date = new Date(intel.generated_at).toLocaleDateString(lang, { day: "numeric", month: "short", year: "numeric" });

    document.querySelector("[data-intel-meta]").textContent = t["intel.meta"]
      .replace("{date}", date).replace("{total}", b.total).replace("{days}", b.window_days);
    document.querySelector("[data-intel-link]").href = S.intelDashboard;

    fill(document.querySelector("[data-bars]"), top.map(function (s) {
      var isMine = mine.indexOf(s.name.toLowerCase()) !== -1;
      var name = [el("span", { text: s.name })];
      if (isMine) name.push(el("span", { class: "mine mono", text: t["intel.mine"] }));
      return el("li", { class: isMine ? "is-mine" : "" }, [
        el("span", { class: "bar-name" }, name),
        el("span", { class: "bar" }, [el("i", { style: "--w:" + (s.share / max).toFixed(3) })]),
        el("span", { class: "bar-val mono", text: pct.format(s.share) }),
      ]);
    }));
  }

  function setLang(next) {
    lang = next;
    var t = S.text[lang];
    root.lang = lang;
    document.title = t["meta.title"];
    document.querySelector('meta[name="description"]').content = t["meta.description"];

    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = t[n.dataset.i18n]; });
    document.querySelector("[data-status-text]").textContent = t[S.available ? "status.on" : "status.off"];
    document.querySelector("[data-status]").classList.toggle("is-busy", !S.available);

    renderLog(t);
    renderCases(t);
    renderHelp(t);
    renderContact(t);
    renderIntel(t);
    observeReveal();

    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    store("lang", lang);
  }

  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });

  // --- aparicion al hacer scroll --------------------------------------------

  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var io = !reduce && "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" }) : null;

  function observeReveal() {
    if (!io) return;
    document.querySelectorAll(".head, .case, .help li, .flow, .panel, .about-body, .contact-links").forEach(function (n) {
      if (n.classList.contains("reveal")) return;
      n.classList.add("reveal");
      io.observe(n);
    });
  }

  var saved = store("lang");
  var browser = (navigator.language || "es").toLowerCase().indexOf("es") === 0 ? "es" : "en";
  setLang(S.text[saved] ? saved : browser);

  // --- intel en vivo (Jobs Pulse) -------------------------------------------

  fetch(S.intelUrl)
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (data) {
      if (!data.boards || !data.boards.skills || !data.boards.skills.length) throw new Error("empty");
      intel = data;
      document.getElementById("intel").hidden = false;
      renderIntel(S.text[lang]);
      observeReveal();
    })
    .catch(function () {
      document.querySelector("[data-intel-only]").hidden = true;
    });

  // --- easter egg -----------------------------------------------------------

  var konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  var pos = 0;
  var toast = document.querySelector(".toast");
  var toastTimer;
  document.addEventListener("keydown", function (e) {
    var key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    pos = key === konami[pos] ? pos + 1 : (key === konami[0] ? 1 : 0);
    if (pos < konami.length) return;
    pos = 0;
    toast.hidden = false;
    root.classList.add("crt");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.hidden = true; root.classList.remove("crt"); }, 6000);
  });

  console.log("%c> Mirando el código? / Reading the source?\n> " + S.contact.email,
    "font-family: monospace; color: #3df5a0; font-size: 13px;");
})();
