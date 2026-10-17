import "./icons.js";

(function () {
  const translations = {
    en: {
      "meta.title": "Morteza Rahmani | Front-End Developer",
      "meta.description":
        "Morteza Rahmani — Front-End Developer specializing in React, Next.js, and TypeScript.",
      "aria.nav": "Main navigation",
      "aria.lang": "Toggle language",
      "aria.menu": "Open menu",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.goals": "Goals",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "hero.badge": "Available for opportunities",
      "hero.title":
        'Hi, I\'m <span class="text-gradient">Morteza</span>',
      "hero.subtitle": "Front-End Developer | React • Next.js • TypeScript",
      "hero.intro":
        'I\'m <strong class="text-slate-200">Morteza Rahmani</strong>, a Front-End Developer passionate about building modern, responsive, and user-centered web interfaces—with a graphic design background that shapes every pixel I ship.',
      "hero.btnProjects": "View projects",
      "hero.btnContact": "Get in touch",
      "hero.statExp": "Experience",
      "hero.statExpVal": "3+ yrs",
      "hero.statExpDesc": "Learning & building",
      "hero.statPro": "Professional",
      "hero.statProVal": "1 yr",
      "hero.statProDesc": "Team environment",
      "hero.statFocus": "Focus",
      "hero.statFocusVal": "UI / UX",
      "hero.statFocusDesc": "Design + code",
      "hero.cardRole": "Front-End Developer",
      "about.title": "About Me",
      "about.subtitle": "Turning ideas into clean, maintainable interfaces",
      "about.p1":
        'With an educational background in <strong class="text-slate-200">Graphic Design</strong>, I combine visual design principles with programming to create interfaces that are both functional and visually engaging.',
      "about.p2":
        'I\'ve been continuously learning and improving my front-end development skills for <strong class="text-slate-200">more than three years</strong>, including <strong class="text-slate-200">one year of professional experience</strong> working in a team environment.',
      "about.p3":
        "I enjoy turning ideas and designs into clean, maintainable, and responsive web applications while exploring modern technologies and best practices.",
      "about.careTitle": "What I Care About",
      "about.care1": "Clean & Modern UI",
      "about.care2": "Responsive Web Design",
      "about.care3": "Reusable Components",
      "about.care4": "Performance",
      "about.care5": "Clean & Maintainable Code",
      "about.care6": "UI/UX",
      "about.care7": "Continuous Learning",
      "skills.title": "Tech Stack",
      "skills.subtitle": "Tools I use to build modern web experiences",
      "skills.frontend": "Frontend",
      "skills.frontendDesc": "Interfaces, components & responsive layouts",
      "skills.backend": "Backend & Database",
      "skills.backendDesc": "Data layer & persistence",
      "skills.tools": "Tools",
      "skills.toolsDesc": "Workflow, version control & IDEs",
      "goals.title": "Goals & Learning",
      "goals.subtitle": "A continuous journey toward becoming a stronger developer",
      "goals.intro":
        "I believe that becoming a better developer is a continuous journey. I'm constantly improving my technical knowledge, strengthening my fundamentals, and expanding my skills.",
      "goals.learningTitle": "Currently Learning & Improving",
      "goals.english": "English",
      "goals.englishDesc": "Communication & technical vocabulary",
      "goals.ts": "TypeScript",
      "goals.tsDesc": "Advanced types & type-safe development",
      "goals.next": "Next.js",
      "goals.nextDesc": "Architecture, performance, best practices",
      "goals.js": "JavaScript",
      "goals.jsDesc": "Fundamentals & advanced concepts",
      "goals.python": "Python",
      "goals.pythonDesc": "Strong foundation & broader programming",
      "goals.longTitle": "Long-Term Goals",
      "goals.long1":
        'Become a stronger and more well-rounded <strong class="text-slate-200">Front-End Developer</strong>.',
      "goals.long2":
        "Build a deeper understanding of programming fundamentals and software architecture.",
      "goals.long3":
        "Create production-ready applications using modern web technologies.",
      "goals.long4": "Improve my English communication skills.",
      "goals.long5":
        "Continuously learn, build, experiment, and grow as a developer.",
      "projects.title": "Featured Projects",
      "projects.subtitle": "Personal and professional work to explore new technologies",
      "projects.intro":
        'I\'m continuously working on projects to strengthen my skills. Add your best work below—edit <code class="rounded bg-white/10 px-1.5 py-0.5 text-sm text-sky-300">index.html</code> or connect live links when ready.',
      "projects.p1Title": "Component Library",
      "projects.p1Desc":
        "Reusable UI components with React & Tailwind—focused on accessibility and responsive layouts.",
      "projects.p2Title": "Next.js App",
      "projects.p2Desc":
        "Full-stack style front-end exploring Next.js routing, data fetching, and performance patterns.",
      "projects.p3Title": "Design-to-Code",
      "projects.p3Desc":
        "Portfolio pieces that blend graphic design sensibility with clean, maintainable front-end code.",
      "projects.soon": "Coming soon — add your link",
      "contact.title": "Connect With Me",
      "contact.subtitle": "Let's build something great together",
      "contact.text":
        "Open to collaboration, freelance work, and learning opportunities.",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "contact.linkedin": "LinkedIn",
      "contact.github": "GitHub",
      "footer.tagline": "Always learning. Always building.",
    },
    fa: {
      "meta.title": "مرتضی رحمانی | توسعه‌دهنده فرانت‌اند",
      "meta.description":
        "مرتضی رحمانی — توسعه‌دهنده فرانت‌اند با تخصص در React، Next.js و TypeScript.",
      "aria.nav": "منوی اصلی",
      "aria.lang": "تغییر زبان",
      "aria.menu": "باز کردن منو",
      "nav.home": "خانه",
      "nav.about": "درباره من",
      "nav.skills": "مهارت‌ها",
      "nav.goals": "اهداف",
      "nav.projects": "پروژه‌ها",
      "nav.contact": "ارتباط",
      "hero.badge": "آماده همکاری و فرصت‌های شغلی",
      "hero.title":
        'سلام، من <span class="text-gradient">مرتضی</span> هستم',
      "hero.subtitle": "توسعه‌دهنده فرانت‌اند | React • Next.js • TypeScript",
      "hero.intro":
        'من <strong class="text-slate-200">مرتضی رحمانی</strong> هستم؛ توسعه‌دهنده فرانت‌اند که عاشق ساخت رابط‌های مدرن، واکنش‌گرا و کاربرمحور است — با پیشینه <strong class="text-slate-200">طراحی گرافیک</strong> که روی هر جزئیات رابط تأثیر می‌گذارد.',
      "hero.btnProjects": "مشاهده پروژه‌ها",
      "hero.btnContact": "تماس با من",
      "hero.statExp": "تجربه",
      "hero.statExpVal": "+۳ سال",
      "hero.statExpDesc": "یادگیری و ساخت",
      "hero.statPro": "حرفه‌ای",
      "hero.statProVal": "۱ سال",
      "hero.statProDesc": "کار تیمی",
      "hero.statFocus": "تمرکز",
      "hero.statFocusVal": "UI / UX",
      "hero.statFocusDesc": "طراحی + کد",
      "hero.cardRole": "توسعه‌دهنده فرانت‌اند",
      "about.title": "درباره من",
      "about.subtitle": "تبدیل ایده‌ها به رابط‌های تمیز و قابل نگهداری",
      "about.p1":
        'با پیشینه تحصیلی در <strong class="text-slate-200">طراحی گرافیک</strong>، اصول طراحی بصری را با برنامه‌نویسی ترکیب می‌کنم تا رابط‌هایی بسازم که هم کاربردی و هم جذاب باشند.',
      "about.p2":
        'بیش از <strong class="text-slate-200">سه سال</strong> به‌صورت مداوم مهارت‌های فرانت‌اند را یاد گرفته و بهبود داده‌ام؛ شامل <strong class="text-slate-200">یک سال تجربه حرفه‌ای</strong> در محیط تیمی.',
      "about.p3":
        "از تبدیل ایده‌ها و طرح‌ها به اپلیکیشن‌های وب تمیز، قابل نگهداری و واکنش‌گرا لذت می‌برم و همیشه فناوری‌ها و بهترین روش‌های روز را دنبال می‌کنم.",
      "about.careTitle": "چیزهایی که برایم مهم است",
      "about.care1": "رابط کاربری تمیز و مدرن",
      "about.care2": "طراحی واکنش‌گرا",
      "about.care3": "کامپوننت‌های قابل استفاده مجدد",
      "about.care4": "عملکرد و سرعت",
      "about.care5": "کد تمیز و قابل نگهداری",
      "about.care6": "UI/UX",
      "about.care7": "یادگیری مداوم",
      "skills.title": "مهارت‌ها و ابزارها",
      "skills.subtitle": "ابزارهایی که برای ساخت تجربه‌های وب مدرن استفاده می‌کنم",
      "skills.frontend": "فرانت‌اند",
      "skills.frontendDesc": "رابط کاربری، کامپوننت و چیدمان واکنش‌گرا",
      "skills.backend": "بک‌اند و پایگاه داده",
      "skills.backendDesc": "لایه داده و ذخیره‌سازی",
      "skills.tools": "ابزارها",
      "skills.toolsDesc": "گردش کار، کنترل نسخه و محیط توسعه",
      "goals.title": "اهداف و یادگیری",
      "goals.subtitle": "مسیر مداوم برای تبدیل شدن به یک توسعه‌دهنده قوی‌تر",
      "goals.intro":
        "معتقدم تبدیل شدن به توسعه‌دهنده بهتر یک سفر بی‌پایان است. مدام دانش فنی، اصول پایه و مهارت‌هایم را گسترش می‌دهم.",
      "goals.learningTitle": "در حال یادگیری و تقویت",
      "goals.english": "انگلیسی",
      "goals.englishDesc": "مهارت ارتباطی و واژگان فنی",
      "goals.ts": "TypeScript",
      "goals.tsDesc": "مفاهیم پیشرفته و توسعه type-safe",
      "goals.next": "Next.js",
      "goals.nextDesc": "معماری، عملکرد و بهترین روش‌ها",
      "goals.js": "JavaScript",
      "goals.jsDesc": "اصول و مفاهیم پیشرفته",
      "goals.python": "Python",
      "goals.pythonDesc": "پایه قوی و گسترش دانش برنامه‌نویسی",
      "goals.longTitle": "اهداف بلندمدت",
      "goals.long1":
        'تبدیل شدن به یک <strong class="text-slate-200">توسعه‌دهنده فرانت‌اند</strong> قوی‌تر و همه‌فن‌حریف.',
      "goals.long2":
        "درک عمیق‌تر از اصول برنامه‌نویسی و معماری نرم‌افزار.",
      "goals.long3":
        "ساخت اپلیکیشن‌های آماده تولید با فناوری‌های وب مدرن.",
      "goals.long4": "بهبود مهارت ارتباطی انگلیسی.",
      "goals.long5":
        "یادگیری، ساخت، آزمایش و رشد مداوم به‌عنوان توسعه‌دهنده.",
      "projects.title": "پروژه‌های منتخب",
      "projects.subtitle": "کارهای شخصی و حرفه‌ای برای کشف فناوری‌های جدید",
      "projects.intro":
        'مدام روی پروژه‌ها کار می‌کنم تا مهارت‌هایم را تقویت کنم. بهترین کارهایت را پایین اضافه کن — فایل <code class="rounded bg-white/10 px-1.5 py-0.5 text-sm text-sky-300">index.html</code> را ویرایش کن یا لینک واقعی بگذار.',
      "projects.p1Title": "کتابخانه کامپوننت",
      "projects.p1Desc":
        "کامپوننت‌های UI قابل استفاده مجدد با React و Tailwind — با تمرکز بر دسترس‌پذیری و چیدمان واکنش‌گرا.",
      "projects.p2Title": "اپلیکیشن Next.js",
      "projects.p2Desc":
        "فرانت‌اند با رویکرد full-stack؛ مسیریابی Next.js، دریافت داده و الگوهای عملکرد.",
      "projects.p3Title": "از طراحی تا کد",
      "projects.p3Desc":
        "نمونه‌کارهایی که حس طراحی گرافیک را با کد فرانت‌اند تمیز و قابل نگهداری ترکیب می‌کنند.",
      "projects.soon": "به‌زودی — لینک خود را اضافه کنید",
      "contact.title": "ارتباط با من",
      "contact.subtitle": "بیایید با هم چیز خوبی بسازیم",
      "contact.text":
        "برای همکاری، پروژه فریلنس و فرصت‌های یادگیری در دسترس هستم.",
      "contact.email": "ایمیل",
      "contact.phone": "تماس",
      "contact.linkedin": "لینکدین",
      "contact.github": "گیت‌هاب",
      "footer.tagline": "همیشه در حال یادگیری. همیشه در حال ساخت.",
    },
  };

  const STORAGE_KEY = "portfolio-lang";

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const langToggle = document.getElementById("lang-toggle");
  let currentLang = "en";

  function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    if (dict["meta.title"]) document.title = dict["meta.title"];

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict["meta.description"]) {
      metaDesc.setAttribute("content", dict["meta.description"]);
    }
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    const html = document.documentElement;
    html.lang = lang === "fa" ? "fa" : "en";
    html.dir = lang === "fa" ? "rtl" : "ltr";

    applyTranslations(lang);

    if (langToggle) {
      langToggle.textContent = lang === "fa" ? "EN" : "FA";
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      setLanguage(currentLang === "en" ? "fa" : "en");
    });
  }

  const saved = (() => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  })();
  if (saved === "fa" || saved === "en") {
    setLanguage(saved);
  } else {
    setLanguage("en");
  }

  function setMobileMenuOpen(open) {
    if (!navMenu || !menuToggle) return;
    navMenu.classList.toggle("is-open", open);
    menuToggle.classList.toggle("is-active", open);
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const open = !navMenu.classList.contains("is-open");
      setMobileMenuOpen(open);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        setMobileMenuOpen(false);
      });
    });

    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setMobileMenuOpen(false);
      }
    });
  }

  const sections = document.querySelectorAll("section[id]");
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`
          );
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document
    .querySelectorAll(".reveal")
    .forEach((el) => revealObserver.observe(el));

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
