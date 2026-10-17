(function () {
  var S = window.SITE;
  var root = document.documentElement;

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

  var githubUrl = "https://github.com/" + S.githubUser;

  // --- datos fijos (no dependen del idioma) ---------------------------------

  document.querySelectorAll("[data-name]").forEach(function (n) { n.textContent = S.name; });
  document.querySelectorAll("[data-github-link]").forEach(function (n) { n.href = githubUrl; });
  document.querySelector("[data-year]").textContent = new Date().getFullYear();
  if (!S.available) document.querySelector("[data-status]").hidden = true;
  if (!S.projects.length) {
    document.querySelectorAll("[data-needs-projects]").forEach(function (n) { n.hidden = true; });
  }

  // --- render por idioma ----------------------------------------------------

  function renderList(container, items) {
    container.replaceChildren.apply(container, items.map(function (it, i) {
      return el("li", {}, [
        el("span", { class: "num", text: String(i + 1).padStart(2, "0") }),
        el("h3", { text: it.t }),
        el("p", { text: it.d }),
      ]);
    }));
  }

  function renderFacts(container, items) {
    container.replaceChildren.apply(container, items.map(function (f) {
      return el("div", { class: "fact" }, [el("dt", { text: f.v }), el("dd", { text: f.d })]);
    }));
  }

  function renderProjects(container, t, lang) {
    container.replaceChildren.apply(container, S.projects.map(function (p) {
      var links = [];
      if (p.repo) links.push(el("a", { href: p.repo, target: "_blank", rel: "noopener", text: t["projects.code"] }));
      if (p.demo) links.push(el("a", { href: p.demo, target: "_blank", rel: "noopener", text: t["projects.demo"] }));
      var body = [
        el("h3", { text: p.title[lang] }),
        el("p", { text: p.summary[lang] }),
        el("ul", { class: "tags" }, p.tags.map(function (tag) { return el("li", { text: tag }); })),
        el("div", { class: "card-links" }, links),
      ];
      var kids = p.image ? [el("img", { src: p.image, alt: p.title[lang], loading: "lazy" })] : [];
      kids.push(el("div", { class: "card-body" }, body));
      return el("article", { class: "card" }, kids);
    }));
  }

  function renderStack(container, t) {
    container.replaceChildren.apply(container, S.stack.map(function (g) {
      return el("div", { class: "stack-group" }, [
        el("h3", { text: t["stack." + g.group] }),
        el("ul", { class: "tags" }, g.items.map(function (x) { return el("li", { text: x }); })),
      ]);
    }));
  }

  // "573016612888" -> "+57 301 661 2888" (country code + 10-digit number); otherwise as-is.
  function phoneLabel(digits) {
    if (digits.length !== 12) return "+" + digits;
    return "+" + digits.slice(0, 2) + " " + digits.slice(2, 5) + " " + digits.slice(5, 8) + " " + digits.slice(8);
  }

  function renderContact(container, t) {
    var c = S.contact;
    var links = [];
    if (c.email) links.push(["email", "mailto:" + c.email, c.email]);
    if (c.whatsapp) links.push(["whatsapp", "https://wa.me/" + c.whatsapp, phoneLabel(c.whatsapp)]);
    if (c.linkedin) links.push(["linkedin", c.linkedin, c.linkedin.replace(/^https?:\/\/(www\.)?/, "")]);
    links.push(["github", githubUrl, "github.com/" + S.githubUser]);
    container.replaceChildren.apply(container, links.map(function (l, i) {
      var external = l[0] !== "email";
      var attrs = { href: l[1], class: "contact-link" + (i === 0 ? " is-primary" : "") };
      if (external) { attrs.target = "_blank"; attrs.rel = "noopener"; }
      return el("a", attrs, [
        el("span", { class: "contact-label", text: t["contact." + l[0]] }),
        el("span", { class: "contact-value", text: l[2] }),
      ]);
    }));
  }

  function setLang(lang) {
    var t = S.text[lang];
    root.lang = lang;
    document.title = t["meta.title"];
    document.querySelector('meta[name="description"]').content = t["meta.description"];

    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = t[n.dataset.i18n]; });
    document.querySelectorAll("[data-i18n-html]").forEach(function (n) { n.innerHTML = t[n.dataset.i18nHtml]; });
    document.querySelectorAll("[data-i18n-label]").forEach(function (n) {
      n.setAttribute("aria-label", t[n.dataset.i18nLabel]);
      n.title = t[n.dataset.i18nLabel];
    });
    document.querySelectorAll("[data-list]").forEach(function (n) { renderList(n, t[n.dataset.list]); });
    document.querySelectorAll("[data-facts]").forEach(function (n) { renderFacts(n, t[n.dataset.facts]); });
    renderProjects(document.querySelector("[data-projects]"), t, lang);
    renderStack(document.querySelector("[data-stack]"), t);
    renderContact(document.querySelector("[data-contact]"), t);

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
})();
