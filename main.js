(function () {
  var S = window.SITE;
  var root = document.documentElement;
  var lang = "es";
  var market = null; // summary.json de Jobs Pulse, si cargo

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
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function fill(container, nodes) {
    container.replaceChildren.apply(container, nodes);
  }

  var githubUrl = "https://github.com/" + S.githubUser;

  // --- datos fijos (no dependen del idioma) ---------------------------------

  document.querySelectorAll("[data-name]").forEach(function (n) { n.textContent = S.name; });
  document.querySelector("[data-year]").textContent = new Date().getFullYear();
  document.querySelector("[data-email-link]").href = "mailto:" + S.contact.email;
  var photo = document.querySelector("[data-photo]");
  photo.src = S.photo;
  photo.alt = S.name;

  // "573016612888" -> "+57 301 661 2888" (country code + 10-digit number); otherwise as-is.
  function phoneLabel(digits) {
    if (digits.length !== 12) return "+" + digits;
    return "+" + digits.slice(0, 2) + " " + digits.slice(2, 5) + " " + digits.slice(5, 8) + " " + digits.slice(8);
  }

  // --- render por idioma ----------------------------------------------------

  function renderSpec(t) {
    fill(document.querySelector("[data-spec]"), S.spec.map(function (row) {
      return el("div", {}, [
        el("dt", { text: t[row[0]] }),
        el("dd", { text: t[row[1]] || row[1] }),
      ]);
    }));
  }

  function renderCases(t) {
    fill(document.querySelector("[data-cases]"), S.projects.map(function (p, i) {
      var c = p[lang];
      var meta = String(i + 1).padStart(2, "0") + "  " + t["work.kind." + p.kind] + "  ·  " + p.tags.join(", ");
      var rows = ["problem", "build", "result"].map(function (k) {
        return el("div", {}, [el("dt", { text: t["work." + k] }), el("dd", { text: c[k] })]);
      });
      var links = [];
      if (p.demo) links.push(el("a", { href: p.demo, target: "_blank", rel: "noopener", text: t["work.demo"] + " ↗" }));
      if (p.repo) links.push(el("a", { href: p.repo, target: "_blank", rel: "noopener", text: t["work.code"] + " ↗" }));
      if (!links.length) links.push(el("span", { class: "muted", text: t["work.private"] }));
      return el("article", { class: "case" }, [
        el("p", { class: "case-meta", text: meta }),
        el("h3", { text: p.title }),
        el("p", { class: "case-summary", text: c.summary }),
        el("figure", { class: "case-shot" }, [el("img", { src: p.image, alt: "", loading: "lazy", width: "800", height: "500" })]),
        el("dl", { class: "case-rows" }, rows),
        el("p", { class: "case-links" }, links),
      ]);
    }));
  }

  function renderExperience(t) {
    fill(document.querySelector("[data-exp]"), t["exp.items"].map(function (it) {
      return el("li", {}, [
        el("span", { class: "row-key", text: it.when }),
        el("div", {}, [
          el("p", { class: "row-title" }, [el("strong", { text: it.role }), el("span", { class: "muted", text: " · " + it.org })]),
          el("p", { class: "row-text", text: it.d }),
        ]),
      ]);
    }));
  }

  function renderServices(t) {
    fill(document.querySelector("[data-services]"), t["services.items"].map(function (it) {
      return el("li", {}, [
        el("span", { class: "row-key", text: it.s }),
        el("div", {}, [
          el("p", { class: "row-title" }, [el("strong", { text: it.t })]),
          el("p", { class: "row-text", text: it.d }),
        ]),
      ]);
    }));
    fill(document.querySelector("[data-steps]"), t["process.steps"].map(function (it, i) {
      return el("li", {}, [
        el("span", { class: "step-n", text: String(i + 1).padStart(2, "0") }),
        el("strong", { text: it.t }),
        el("span", { text: it.d }),
      ]);
    }));
  }

  function renderContact(t) {
    var c = S.contact;
    var rows = [];
    if (c.email) rows.push(["email", "mailto:" + c.email, c.email, true]);
    if (c.whatsapp) rows.push(["whatsapp", "https://wa.me/" + c.whatsapp, phoneLabel(c.whatsapp)]);
    if (c.linkedin) rows.push(["linkedin", c.linkedin, c.linkedin.replace(/^https?:\/\/(www\.)?/, "")]);
    rows.push(["github", githubUrl, "github.com/" + S.githubUser]);
    fill(document.querySelector("[data-contact]"), rows.map(function (r) {
      var attrs = { href: r[1] };
      if (r[0] !== "email") { attrs.target = "_blank"; attrs.rel = "noopener"; }
      var copy = null;
      if (r[3]) {
        copy = el("button", { type: "button", class: "copy", text: t["contact.copy"] });
        copy.addEventListener("click", function () {
          navigator.clipboard.writeText(r[2]).then(function () {
            copy.textContent = t["contact.copied"];
            setTimeout(function () { copy.textContent = t["contact.copy"]; }, 1600);
          });
        });
      }
      return el("li", {}, [
        el("span", { class: "row-key", text: t["contact." + r[0]] }),
        el("div", { class: "contact-line" }, [el("a", attrs, [document.createTextNode(r[2])]), copy]),
      ]);
    }));
  }

  function renderMarket(t) {
    if (!market) return;
    var b = market.boards;
    var mine = S.myStack.map(function (x) { return x.toLowerCase(); });
    var top = b.skills.slice(0, 10);
    var max = top[0].share;
    var pct = new Intl.NumberFormat(lang, { style: "percent", maximumFractionDigits: 0 });
    var date = new Date(market.generated_at).toLocaleDateString(lang, { day: "numeric", month: "short", year: "numeric" });

    document.querySelector("[data-market-headline]").textContent = t["market.headline"]
      .replace("{skill}", top[0].name).replace("{share}", pct.format(top[0].share));
    document.querySelector("[data-market-meta]").textContent = t["market.meta"]
      .replace("{total}", b.total).replace("{days}", b.window_days).replace("{date}", date);
    document.querySelector("[data-market-link]").href = S.intelDashboard;

    fill(document.querySelector("[data-bars]"), top.map(function (s) {
      var isMine = mine.indexOf(s.name.toLowerCase()) !== -1;
      return el("li", { class: isMine ? "is-mine" : "" }, [
        el("span", { class: "bar-name" }, [
          document.createTextNode(s.name),
          isMine ? el("span", { class: "tag", text: t["market.mine"] }) : null,
        ]),
        el("span", { class: "bar" }, [el("i", { style: "width:" + (s.share / max * 100).toFixed(1) + "%" })]),
        el("span", { class: "bar-val", text: pct.format(s.share) }),
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
    document.querySelectorAll("[data-i18n-label]").forEach(function (n) {
      n.setAttribute("aria-label", t[n.dataset.i18nLabel]);
      n.title = t[n.dataset.i18nLabel];
    });
    document.querySelector("[data-status-text]").textContent = t[S.available ? "status.on" : "status.off"];
    document.querySelector("[data-status]").classList.toggle("is-busy", !S.available);

    renderSpec(t);
    renderCases(t);
    renderExperience(t);
    renderServices(t);
    renderContact(t);
    renderMarket(t);

    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    store("lang", lang);
  }

  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });

  var saved = store("lang");
  var browser = (navigator.language || "es").toLowerCase().indexOf("es") === 0 ? "es" : "en";
  setLang(S.text[saved] ? saved : browser);

  // --- tema -----------------------------------------------------------------

  document.getElementById("theme").addEventListener("click", function () {
    var current = root.dataset.theme ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    store("theme", next);
  });

  // --- seccion activa en el indice ------------------------------------------

  var links = Array.prototype.slice.call(document.querySelectorAll(".toc a"));
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id); });
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    document.querySelectorAll("main section").forEach(function (s) { spy.observe(s); });
  }

  // --- mercado en vivo (Jobs Pulse) -----------------------------------------

  fetch(S.intelUrl)
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (data) {
      if (!data.boards || !data.boards.skills || !data.boards.skills.length) throw new Error("empty");
      market = data;
      document.getElementById("mercado").hidden = false;
      renderMarket(S.text[lang]);
    })
    .catch(function () {
      document.querySelector("[data-market-only]").hidden = true;
    });
})();
