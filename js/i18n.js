/* ============================================================
   MAJED ABDULLAH — i18n.js
   تبديل اللغة بين الإنجليزية والعربية.
   لإضافة/تعديل ترجمة: أضف السطر داخل الكائن AR أدناه
   المفتاح = النص الإنجليزي بالضبط، القيمة = النص العربي.
   ============================================================ */

const AR = {
  // Navigation
  "Home": "الرئيسية",
  "About": "نبذة",
  "Portfolio": "الأعمال",
  "Contact": "تواصل",
  "About Me": "نبذة عني",
  "Get in touch": "تواصل معي",
  "View Projects": "عرض المشاريع",
  "View All Projects": "عرض كل المشاريع",
  "Selected Work": "أعمال مختارة",
  "Selected projects": "مشاريع مختارة",
  "Let's connect": "لنتواصل",
  "Architecture as a quiet act": "العمارة فعلٌ هادئ",
  "Majed Abdullah": "ماجد عبدالله",
  "MAJED ABDULLAH": "ماجد عبدالله",
  "Philosophy": "الفلسفة",
  "Experience": "الخبرة",
  "Software": "البرامج",
  "Skills": "المهارات",
  "Email": "البريد الإلكتروني",
  "WhatsApp": "واتساب",
  "Instagram": "إنستغرام",
  "LinkedIn": "لينكدإن",
  "Based in": "المقر",
  "Riyadh, Saudi Arabia": "الرياض، المملكة العربية السعودية",
  "Architecture / Design / Visualization": "عمارة / تصميم / إظهار معماري",

  // Filters / categories
  "All": "الكل",
  "Residential": "سكني",
  "Commercial": "تجاري",
  "Cultural": "ثقافي",
  "Interior": "داخلي",
  "Conceptual": "مفاهيمي",

  // Project page
  "Project": "المشروع",
  "Location": "الموقع",
  "Year": "السنة",
  "Category": "التصنيف",
  "Role": "الدور",
  "Firm": "الجهة",
  "About the project": "عن المشروع",
  "← Previous": "→ السابق",
  "Next →": "التالي ←",

  // Paragraphs
  "Majed Abdullah is an architect and designer working between Riyadh and the wider Gulf. The practice is concerned with light, mass and restraint — buildings that hold a single clear idea and let material, shadow and proportion carry the rest.":
    "ماجد عبدالله معماري ومصمم يعمل بين الرياض ومنطقة الخليج. يهتم العمل بالضوء والكتلة والاتزان — مبانٍ تحمل فكرة واحدة واضحة وتترك للمادة والظل والتناسب إكمال الباقي.",
  "Each project begins with the site: its orientation, its climate, and the way people already move through it. The drawing that follows is deliberately reduced, so that what remains is essential.":
    "يبدأ كل مشروع من الموقع: اتجاهه ومناخه وطريقة حركة الناس فيه. ثم يُختزل الرسم عمداً حتى لا يبقى إلا الجوهري.",
  "A selection of built and conceptual projects — courtyard houses, cultural halls, workplace towers and pavilions — studied through mass, threshold and daylight.":
    "مجموعة من المشاريع المنفَّذة والمفاهيمية — بيوت بأفنية، وقاعات ثقافية، وأبراج مكتبية، وأجنحة — تُدرَس عبر الكتلة والعتبة وضوء النهار.",
  "Available for architectural design, interior architecture and visualization commissions, as well as collaborations and competitions.":
    "متاح لأعمال التصميم المعماري والعمارة الداخلية والإظهار المعماري، إضافة إلى التعاونات والمسابقات.",
  "Architecture should be quiet enough to be lived in. Material is left honest, detail is minimised, and daylight is treated as the primary finish. What is removed matters as much as what is built.":
    "ينبغي أن تكون العمارة هادئة بما يكفي لتُعاش. تُترك المادة صادقة، وتُختزل التفاصيل، ويُعامَل ضوء النهار كأهم تشطيب. وما يُحذف لا يقل أهمية عما يُبنى.",
  "Majed Abdullah is an architect and designer based in Riyadh. His work moves between residential, cultural and commercial scales, but keeps a consistent interest: how a building organises light, silence and movement.":
    "ماجد عبدالله معماري ومصمم مقيم في الرياض. يتنقل عمله بين المقاييس السكنية والثقافية والتجارية، مع اهتمام ثابت: كيف ينظّم المبنى الضوء والسكون والحركة.",
};

const LANGS = { en: "EN", ar: "ع" };

function translateNode(el) {
  el.querySelectorAll("*").forEach((node) => {
    if (node.children.length) return;
    const original = node.dataset.i18nOriginal ?? node.textContent.trim();
    if (!original) return;
    node.dataset.i18nOriginal = original;
    const lang = document.documentElement.lang;
    const next = lang === "ar" ? AR[original] || original : original;
    if (node.textContent.trim() !== next) node.textContent = next;
  });
}

function applyI18n() {
  translateNode(document.body);
}

function setLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("is-ar", lang === "ar");
  try { localStorage.setItem("site-lang", lang); } catch (e) {}
  applyI18n();
  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.lang === lang);
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
}

function initI18n() {
  const overlay = document.querySelector(".nav-overlay");
  if (overlay && !overlay.querySelector(".lang-switch")) {
    const box = document.createElement("div");
    box.className = "lang-switch";
    box.setAttribute("aria-label", "Language");
    box.innerHTML = Object.entries(LANGS)
      .map(([code, label]) => `<button type="button" data-lang="${code}">${label}</button>`)
      .join("<span class=\"lang-sep\">/</span>");
    overlay.appendChild(box);
    box.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-lang]");
      if (b) setLang(b.dataset.lang);
    });
  }
  let saved = "en";
  try { saved = localStorage.getItem("site-lang") || "en"; } catch (e) {}
  setLang(saved);
}

window.applyI18n = applyI18n;
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  initI18n();
}
