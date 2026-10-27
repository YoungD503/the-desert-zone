(() => {
  const I18N = {"en": {}, "es": {"k0": "Qué construimos", "k1": "Dónde empezar", "k2": "El camino", "k3": "Preguntas", "k4": "Únete a TDZ", "k116": "Incubadora y aceleradora de startups · © 2026", "f1": "Infraestructura y comunidad para fundadores con grandes ideas.", "f2": "Newsletter: historias de fundadores, eventos y convocatorias de The Desert ZONE.", "f3": "Suscribirme", "f4": "Explorar", "f5": "Qué construimos", "f6": "Dónde empezar", "f7": "El camino", "f8": "Encuentra tu etapa", "f9": "Preguntas frecuentes", "f10": "Únete a TDZ", "f11": "Recursos", "f12": "Newsletter ↗", "f13": "Software", "f14": "Herramientas que construimos para fundadores", "f15": "Aprende", "f16": "Guías, talleres y cursos", "f17": "Pronto", "f19": "Pronto", "f20": "Ropa y artículos de TDZ", "f21": "Síguenos", "w1": "Escríbenos", "f22": "Leer ediciones anteriores ↗", "klearn": "Aprende", "m1": "Infraestructura", "m2": "Espacio de trabajo, herramientas, constitución e inversionistas", "m3": "Comunidad", "m4": "Mentores, grupo de fundadores y noches de pitch", "m5": "Incubadora", "m6": "Empieza aquí si tienes una idea", "m7": "Aceleradora", "m8": "Empieza aquí si ya estás creciendo", "m9": "Encuentra tu etapa", "m10": "Responde tres preguntas", "m11": "Presenta tu idea", "m12": "Regístrate y prepara tu pitch de 60 segundos", "m13": "Construye con TDZ", "m14": "Incubadora o Aceleradora, según tu etapa", "m15": "Demo Day y más allá", "m16": "Presenta ante inversionistas y despega", "m17": "Plantillas", "m18": "Pitch deck, modelo financiero y registros", "m19": "Guías", "m20": "Guías paso a paso para cada etapa", "m21": "Mentoría y apoyo", "m22": "Mentores, horas de oficina y clínicas", "sw5": "Ver el kit de herramientas", "tk1": "El kit del fundador", "tk2": "Todo lo que necesitas para construir, en un solo lugar.", "tk3": "Plantillas, guías y apoyo que los fundadores de TDZ usan cada semana. Filtra según lo que necesitas ahora.", "fl1": "Todo", "fl3": "Plantillas", "fl4": "Guías", "fl5": "Mentoría y apoyo", "c2t": "Plantilla · PowerPoint", "c2h": "Plantilla de pitch deck", "c2d": "Las 12 diapositivas que esperan los inversionistas, con el estilo de TDZ y notas sobre qué escribir en cada una.", "c3t": "Plantilla · Google Sheets", "c3h": "Modelo financiero", "c3d": "Planea ingresos, costos y runway para los próximos 36 meses, con un dashboard que se actualiza solo.", "c3a": "Supuestos", "c3b": "Ingresos", "c3c": "Costos", "c3e": "Flujo de caja", "c4h": "Registro de entrevistas con clientes", "c4d": "Anota cada entrevista con clientes y descubre qué problemas aparecen con más frecuencia.", "c4a": "Entrevistas", "c4b": "Hallazgos", "c4c": "Problemas principales", "c5h": "Seguimiento de inversión", "c5d": "Sigue cada conversación con inversionistas, desde el primer correo hasta cerrar la ronda.", "c5a": "Inversionistas", "c5b": "Seguimientos", "c6t": "Guía", "c6h": "Valida tu idea en 30 días", "c6d": "Un plan paso a paso para probar la demanda con clientes reales antes de construir.", "c7h": "Formaliza tu negocio", "c7d": "Registro, impuestos y cuentas bancarias empresariales, explicados en lenguaje sencillo.", "c8h": "El pitch de 60 segundos", "c8d": "Cómo explicar tu startup con claridad, con una plantilla para practicar en voz alta.", "c9t": "Mentoría", "c9h": "Mentoría 1:1", "c9d": "Sesiones periódicas con fundadores y ejecutivos con experiencia en tu mercado.", "c10t": "Apoyo", "c10h": "Horas de oficina", "c10d": "Tiempo semanal con el equipo de TDZ para resolver dudas rápidas y destrabar problemas.", "c11t": "Comunidad", "c11h": "Noches de pitch", "c11d": "Practica tu pitch en vivo frente a fundadores y mentores y recibe comentarios honestos.", "c12h": "Clínica legal y financiera", "c12d": "Orientación sobre constitución legal, contratos y cómo abrir tus primeras cuentas.", "acc": "Para fundadores TDZ", "join": "Únete a TDZ →", "cl1": "Obtén el kit completo", "cl2": "Construye con las herramientas de TDZ desde el primer día.", "cl3": "Cada plantilla, guía y sesión de mentoría está incluida para los fundadores de la Incubadora y la Aceleradora.", "cl4": "Presenta tu idea", "ln1": "Aprende", "ln2": "Aprende, construye <em>y despega.</em>", "ln3": "Plantillas, guías y mentoría de The Desert Zone, en un solo lugar."}};
  const CFG = Object.assign({ whatsapp: "10000000000", newsletter: "https://noticias.youngdesert.com" }, window.TDZ_CONFIG || {});
  const NL_CFG = Object.assign({ endpoint: "" }, window.TDZ_CONFIG || {});
  const NL_LIVE = /^https:\/\/script\.google\.com\//.test(NL_CFG.endpoint || "");
  const T = {
    en: {
      htmlLang: "en", ariaLang: "Language", ariaEmail: "Email", newsOff: "Sign-ups save to our list once the site is live. For now, subscribe at", newsOffLink: "The Desert ZONE news ↗", newsSent: "You are on the list. Look out for the next issue in your inbox.", newsBad: "Enter a valid email address, like name@email.com.", newsSending: "Subscribing...", newsFail: "We could not subscribe you right now. Please try again.", ariaMenu: "Menu", ariaNav: "Sections", ariaHome: "The Desert Zone, home", ariaFooter: "Footer",
      ariaWa: "Chat with us on WhatsApp", ariaFilter: "Filter the toolkit",
      waText: "Hi TDZ! I have an idea and would like to know more about The Desert Zone.",
    },
    es: {
      htmlLang: "es", ariaLang: "Idioma", ariaEmail: "Correo", newsOff: "Las suscripciones se guardan en nuestra lista cuando el sitio está en línea. Por ahora, suscríbete en", newsOffLink: "The Desert ZONE noticias ↗", newsSent: "Listo, ya estás en la lista. Busca la próxima edición en tu correo.", newsBad: "Escribe un correo válido, por ejemplo nombre@correo.com.", newsSending: "Suscribiendo...", newsFail: "No pudimos suscribirte ahora. Inténtalo de nuevo.", ariaMenu: "Menú", ariaNav: "Secciones", ariaHome: "The Desert Zone, inicio", ariaFooter: "Pie de página",
      ariaWa: "Escríbenos por WhatsApp", ariaFilter: "Filtrar el kit de herramientas",
      waText: "¡Hola TDZ! Tengo una idea y me gustaría saber más sobre The Desert Zone.",
    },
  };
  let lang = "";
  try { lang = localStorage.getItem("tdz-lang") || ""; } catch (e) {}
  if (lang !== "en" && lang !== "es") lang = (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
  const t = () => T[lang];
  const $ = id => document.getElementById(id);

  const nodes = [...document.querySelectorAll("[data-i]")];
  nodes.forEach(el => { if (I18N.en[el.dataset.i] == null) I18N.en[el.dataset.i] = el.innerHTML; });

  function applyLang() {
    document.documentElement.lang = t().htmlLang;
    nodes.forEach(el => { const v = I18N[lang][el.dataset.i]; if (v != null) el.innerHTML = v; });
    document.querySelectorAll("[data-aria]").forEach(el => { const v = t()[el.dataset.aria]; if (v) el.setAttribute("aria-label", v); });
    document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    const wa = `https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(t().waText)}`;
    $("waFloat").href = wa;
    document.querySelectorAll("[data-wa]").forEach(a => a.href = wa);
    const nl = CFG.newsletter.replace(/\/$/, "");
    nlSub = lang === "es" ? `${nl}/suscribirse` : `${nl}/en/subscribe`;
    $("newsRead").href = lang === "es" ? nl : `${nl}/en`;
    document.querySelectorAll('[data-news="home"]').forEach(a => a.href = $("newsRead").href);
  }
  document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("tdz-lang", lang); } catch (e) {}
    applyLang();
  }));

  // Toolkit filters
  const cards = [...document.querySelectorAll("#cards .card")];
  document.querySelectorAll(".filters button").forEach(btn => btn.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach(b => { const on = b === btn; b.classList.toggle("on", on); b.setAttribute("aria-pressed", String(on)); });
    const f = btn.dataset.f;
    cards.forEach(c => c.hidden = f !== "all" && c.dataset.cat !== f);
  }));


  // Newsletter: saves the email to the Newsletter tab of the Google Sheet
  let nlSub = "";
  function setupNews(formId, inputId, msgId, source) {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener("submit", e => {
      e.preventDefault();
      const input = document.getElementById(inputId), msg = document.getElementById(msgId), btn = form.querySelector("button");
      const email = input.value.trim();
      if (!/^\S+@\S+\.\S+$/.test(email)) { msg.textContent = t().newsBad; input.focus(); return; }
      if (!NL_LIVE) {
        const a = document.createElement("a");
        a.href = nlSub; a.target = "_blank"; a.rel = "noopener"; a.textContent = t().newsOffLink;
        msg.replaceChildren(t().newsOff + " ", a);
        return;
      }
      btn.disabled = true; msg.textContent = t().newsSending;
      fetch(NL_CFG.endpoint, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ type: "newsletter", email, lang, source }) })
        .then(r => r.json()).then(j => { if (!j.ok) throw new Error(j.error); msg.textContent = t().newsSent; input.value = ""; })
        .catch(() => { msg.textContent = t().newsFail; })
        .finally(() => { btn.disabled = false; });
    });
  }
  setupNews("news", "news-email", "newsMsg", "Website footer");
  setupNews("gateNewsForm", "gate-email", "gateNewsMsg", "Welcome window");

  // Phone menu
  const mb = document.getElementById("menuBtn"), mn = document.getElementById("mnav");
  if (mb && mn) {
    const setMenu = o => { mn.hidden = !o; mb.setAttribute("aria-expanded", String(o)); document.body.style.overflow = o ? "hidden" : ""; };
    mb.addEventListener("click", () => setMenu(mn.hidden));
    mn.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
    addEventListener("keydown", e => { if (e.key === "Escape" && !mn.hidden) setMenu(false); });
  }

  // Deep links: learn.html#templates, #guides, #support open that filter
  function fromHash() {
    const f = location.hash.slice(1);
    if (!["templates", "guides", "support"].includes(f)) return;
    const btn = document.querySelector(`.filters [data-f="${f}"]`);
    if (btn) { btn.click(); document.getElementById("toolkit").scrollIntoView(); }
  }
  addEventListener("hashchange", fromHash);

  applyLang();
  fromHash();
})();
