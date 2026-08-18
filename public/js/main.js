/* ============================================================
   MAJD ABDULLAH — main.js
   Vanilla JavaScript only. No build step.
   TO ADD A PROJECT: copy a block in the `projects` array below,
   add its images to /images/project-XX/, then duplicate a file in
   /projects/ and set data-project="your-slug" on <body>.
   ============================================================ */

const SITE = {
  name: "MAJD ABDULLAH",
  email: "studio@majdabdullah.com",
  whatsapp: "https://wa.me/966500000000",
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/",
};

const projects = [
  {
    id: "01",
    slug: "flying-ribbon",
    title: "Flying Ribbon",
    category: "Conceptual",
    location: "Riyadh, Saudi Arabia",
    year: "2026",
    role: "Architect / Designer",
    firm: "MAJD ABDULLAH",
    coverImage: "images/project-01/cover.jpg",
    images: ["images/project-01/cover.jpg", "images/project-01/02.jpg"],
    description:
      "Flying Ribbon begins with a single continuous surface folded across an open desert plaza. The gesture is quiet rather than spectacular: a shading canopy that lifts at the approach, lowers over the threshold, and dissolves into the ground at the far edge. The site is flat and exposed, so the project builds its own horizon. Circulation follows the curvature of the ribbon, drawing visitors along the shaded underside before releasing them into a bright interior court. Materials are limited to white pigmented concrete, sand-blasted plaster and pale stone, chosen so that the structure records the movement of light through the day. At noon the surface is almost weightless; at dusk the shadow of the fold becomes the strongest architectural element on the site.",
  },
  {
    id: "02",
    slug: "desert-courtyard-house",
    title: "Desert Courtyard House",
    category: "Residential",
    location: "Al Diriyah, Saudi Arabia",
    year: "2025",
    role: "Architect / Designer",
    firm: "MAJD ABDULLAH",
    coverImage: "images/project-02/cover.jpg",
    images: ["images/project-02/cover.jpg", "images/project-02/02.jpg"],
    description:
      "A family house organised around a single shaded courtyard. The plan turns inward: solid earth-toned walls face the street while every living space opens onto the planted centre. A date palm anchors the void and sets the daily rhythm of shadow across the terrace. Rooms are arranged as a loose sequence rather than a corridor, so movement through the house is always in relation to the courtyard. Deep reveals, thick plaster and small punched openings temper the climate, while a high clerestory brings indirect light into the majlis. The material palette — rammed-earth tone render, limestone paving, oiled timber — was kept deliberately narrow so the architecture reads as one continuous mass.",
  },
  {
    id: "03",
    slug: "stone-gallery",
    title: "Stone Gallery",
    category: "Cultural",
    location: "Jeddah, Saudi Arabia",
    year: "2025",
    role: "Design Architect",
    firm: "MAJD ABDULLAH",
    coverImage: "images/project-03/cover.jpg",
    images: ["images/project-03/cover.jpg", "images/project-03/02.jpg"],
    description:
      "A small public gallery conceived as a group of monolithic limestone volumes separated by narrow light slots. The entrance is a deep recess cut into the mass, compressing the visitor before the sequence opens into a tall top-lit hall. Exhibition spaces are neutral and unadorned; the architecture withdraws so the work can be read. Daylight is filtered through a diffusing ceiling plane and never falls directly on a surface. Circulation loops back to the entry court, allowing the visitor to leave through the same threshold and register the change in light. The stone is locally quarried and left with a sawn finish, weathering slowly toward the tone of the surrounding street.",
  },
  {
    id: "04",
    slug: "corniche-tower",
    title: "Corniche Tower",
    category: "Commercial",
    location: "Al Khobar, Saudi Arabia",
    year: "2024",
    role: "Architect / Visualization",
    firm: "MAJD ABDULLAH",
    coverImage: "images/project-04/cover.jpg",
    images: ["images/project-04/cover.jpg", "images/project-04/02.jpg"],
    description:
      "An office building on the waterfront defined by a dense screen of white vertical fins. The fins vary in depth according to orientation, reducing solar gain on the western face while keeping the sea view open to the north. Behind the screen the floor plates are simple and column-free, allowing tenants to occupy the building in different configurations over time. At ground level the mass is carved back to form a shaded public arcade that continues the promenade rather than interrupting it. The lobby is a calm double-height room of pale stone and slender steel, deliberately understated against the scale of the facade.",
  },
  {
    id: "05",
    slug: "quiet-interior",
    title: "Quiet Interior",
    category: "Interior",
    location: "Riyadh, Saudi Arabia",
    year: "2024",
    role: "Interior Architect",
    firm: "MAJD ABDULLAH",
    coverImage: "images/project-05/cover.jpg",
    images: ["images/project-05/cover.jpg", "images/project-05/02.jpg"],
    description:
      "An apartment renovation reduced to a few decisions: remove the partitions, extend one continuous floor, and let daylight travel the full depth of the plan. Storage is absorbed into full-height oak joinery so the walls remain empty. The palette is off-white plaster, pale oak and linen, with no applied decoration. A single recessed niche holds the few objects the client wanted on display. The corridor was widened into a room in its own right, lit by a narrow side opening that marks the passage of the afternoon. The result is a domestic interior that feels unhurried and slightly austere, built for long occupation rather than first impressions.",
  },
  {
    id: "06",
    slug: "light-pavilion",
    title: "Light Pavilion",
    category: "Conceptual",
    location: "AlUla, Saudi Arabia",
    year: "2026",
    role: "Architect / Designer",
    firm: "MAJD ABDULLAH",
    coverImage: "images/project-06/cover.jpg",
    images: ["images/project-06/cover.jpg", "images/project-06/02.jpg"],
    description:
      "A pavilion made of thin planes that never quite touch. Each plane is offset from the next, so the enclosure is defined by gaps rather than walls. Visitors enter obliquely and pass through a series of narrow thresholds before arriving at a still, empty room lit only from a single horizontal opening. The structure sits lightly on a raised concrete platform that follows the natural fall of the site. There is no programme beyond pause: the building exists to measure light, shadow and silence. Construction is intentionally simple — board-formed concrete, a lime wash finish, and no visible fixings.",
  },
];

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const pad2 = (n) => String(n).padStart(2, "0");
const bySlug = (slug) => projects.find((p) => p.slug === slug);

/* prefix: project pages live one level deep */
const ROOT = document.body.dataset.root || "";
const url = (p) => ROOT + p;

/* ---------- menu ---------- */
function initMenu() {
  const toggle = $(".menu-toggle");
  const overlay = $(".nav-overlay");
  if (!toggle || !overlay) return;
  const set = (open) => {
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    overlay.setAttribute("aria-hidden", String(!open));
  };
  toggle.addEventListener("click", () =>
    set(!document.body.classList.contains("menu-open"))
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") set(false);
  });
  $$("a", overlay).forEach((a) => a.addEventListener("click", () => set(false)));
}

/* ---------- scroll reveal ---------- */
function initReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((i) => i.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  items.forEach((i) => io.observe(i));
}

/* ---------- shared fixed-stage slider ---------- */
function createStage({ stage, img, caption, counter, slides, onChange }) {
  let index = 0;
  const show = (next, dir) => {
    if (next === index) return;
    index = (next + slides.length) % slides.length;
    img.classList.add(dir > 0 ? "is-out-left" : "is-out-right");
    window.setTimeout(() => {
      const s = slides[index];
      img.src = s.src;
      img.alt = s.alt;
      if (caption) caption.textContent = s.title;
      if (caption && caption.tagName === "A") caption.href = s.href || "#";
      if (counter) counter.textContent = pad2(index + 1) + " / " + pad2(slides.length);
      img.classList.remove("is-out-left", "is-out-right");
      img.classList.add(dir > 0 ? "is-out-right" : "is-out-left");
      requestAnimationFrame(() =>
        requestAnimationFrame(() =>
          img.classList.remove("is-out-left", "is-out-right")
        )
      );
      if (onChange) onChange(index);
    }, 320);
  };
  $(".arrow-prev", stage).addEventListener("click", () => show(index - 1, -1));
  $(".arrow-next", stage).addEventListener("click", () => show(index + 1, 1));
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(index - 1, -1);
    if (e.key === "ArrowRight") show(index + 1, 1);
  });
  if (counter) counter.textContent = "01 / " + pad2(slides.length);
}

/* ---------- home ---------- */
function initHome() {
  const stage = $("#home-stage");
  if (!stage) return;
  const slides = projects.map((p) => ({
    src: p.coverImage,
    alt: p.title + " — " + p.category + " project by MAJD ABDULLAH, " + p.location,
    title: p.title,
    href: "projects/" + p.slug + ".html",
  }));
  createStage({
    stage,
    img: $("#home-image"),
    caption: $("#home-title"),
    counter: $("#home-counter"),
    slides,
  });

  /* marquee: duplicate images for a seamless loop */
  const track = $("#marquee-track");
  if (track) {
    const build = () =>
      projects
        .map(
          (p) =>
            '<a href="projects/' + p.slug + '.html"><img loading="lazy" src="' +
            p.coverImage + '" alt="' + p.title + ' — ' + p.category +
            ' project by MAJD ABDULLAH"></a>'
        )
        .join("");
    track.innerHTML = build() + build();
  }
}

/* ---------- portfolio ---------- */
function initPortfolio() {
  const grid = $("#portfolio-grid");
  if (!grid) return;
  grid.innerHTML = projects
    .map(
      (p) =>
        '<a class="grid-item reveal" data-category="' + p.category +
        '" href="projects/' + p.slug + '.html">' +
        '<span class="frame"><img loading="lazy" src="' + p.coverImage +
        '" alt="' + p.title + ' — ' + p.category + ' project in ' + p.location +
        ' by MAJD ABDULLAH"></span>' +
        "<h3>" + p.title + "</h3><p>" + p.category + "</p></a>"
    )
    .join("");
  initReveal();

  $$(".filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      const f = btn.dataset.filter;
      $$(".filter").forEach((b) => b.classList.toggle("is-active", b === btn));
      $$(".grid-item", grid).forEach((item) => {
        const match = f === "ALL" || item.dataset.category.toUpperCase() === f;
        item.style.display = match ? "" : "none";
      });
    });
  });
}

/* ---------- project detail ---------- */
function initProject() {
  const slug = document.body.dataset.project;
  if (!slug) return;
  const p = bySlug(slug);
  if (!p) return;
  const i = projects.indexOf(p);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];

  document.title = p.title + " — MAJD ABDULLAH";
  $$("[data-field]").forEach((el) => {
    const v = p[el.dataset.field];
    if (v) el.textContent = v;
  });

  const stage = $("#project-stage");
  if (stage) {
    const img = $("#project-image");
    img.src = url(p.images[0]);
    img.alt = p.title + " — image 1 of " + p.images.length;
    createStage({
      stage,
      img,
      caption: null,
      counter: $("#project-counter"),
      slides: p.images.map((src, n) => ({
        src: url(src),
        alt: p.title + " — image " + (n + 1) + " of " + p.images.length,
        title: p.title,
      })),
    });
  }

  const editorial = $("#project-editorial");
  if (editorial) {
    const classes = ["fig-large", "fig-medium", "fig-offset"];
    editorial.innerHTML = p.images
      .map(
        (src, n) =>
          '<figure class="' + classes[n % classes.length] + ' reveal">' +
          '<img loading="lazy" src="' + url(src) + '" alt="' + p.title +
          " — architectural view " + (n + 1) + '"></figure>'
      )
      .join("");
  }

  const pv = $("#nav-prev");
  const nx = $("#nav-next");
  if (pv) pv.href = prev.slug + ".html";
  if (nx) nx.href = next.slug + ".html";
  initReveal();
}

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initHome();
  initPortfolio();
  initProject();
  initReveal();
});
