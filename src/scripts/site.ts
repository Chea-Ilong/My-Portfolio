type Language = 'en' | 'km';

const root = document.documentElement;
const languageToggle = document.querySelector<HTMLButtonElement>('#language-toggle');
const languageIndicator = document.querySelector<HTMLElement>('#language-indicator');
const englishLabel = document.querySelector<HTMLElement>('#language-en');
const khmerLabel = document.querySelector<HTMLElement>('#language-km');

const STORAGE_KEY = 'preferred-language';

const rememberLanguage = (language: Language) => {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Storage can be unavailable (private mode, blocked cookies) — the toggle still works.
  }
};

const storedLanguage = (): Language | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' || stored === 'km' ? stored : null;
  } catch {
    return null;
  }
};

const setLanguage = (language: Language) => {
  root.lang = language;
  document.querySelectorAll<HTMLElement>('[data-en][data-km]').forEach((element) => {
    element.textContent = element.dataset[language] ?? '';
  });
  document.querySelectorAll<HTMLElement>('[data-aria-en][data-aria-km]').forEach((element) => {
    element.setAttribute('aria-label', element.dataset[`aria${language === 'en' ? 'En' : 'Km'}`] ?? '');
  });
  languageToggle?.setAttribute('aria-checked', String(language === 'km'));
  languageIndicator?.classList.toggle('translate-x-full', language === 'km');
  languageIndicator?.classList.toggle('translate-x-0', language === 'en');
  englishLabel?.classList.toggle('text-background', language === 'en');
  englishLabel?.classList.toggle('text-muted-foreground', language === 'km');
  khmerLabel?.classList.toggle('text-background', language === 'km');
  khmerLabel?.classList.toggle('text-muted-foreground', language === 'en');
};

const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')];
const sections = navLinks
  .map((link) => document.getElementById(link.dataset.navLink ?? ''))
  .filter((section): section is HTMLElement => Boolean(section));

const updateActiveNav = () => {
  // The last section is shorter than the remaining scroll room, so its top never
  // reaches the 100px line — without this the nav still reads "Projects" when you
  // are looking at Contact at the very bottom of the page.
  // `scrollY > 0` guards the case where the whole page fits on screen: without it
  // the last link would be highlighted while you are looking at the top.
  const atBottom =
    window.scrollY > 0 &&
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

  let activeSection = atBottom ? sections[sections.length - 1]?.id : sections[0]?.id;
  if (!atBottom) {
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 100) activeSection = section.id;
    }
  }
  for (const link of navLinks) {
    const active = link.dataset.navLink === activeSection;
    link.classList.toggle('text-foreground', active);
    link.classList.toggle('text-muted-foreground', !active);
    link.classList.toggle('is-active', active);
  }
};

// Coalesce to one recalculation per frame — scroll fires far faster than paint.
let navFrame = 0;
const scheduleNavUpdate = () => {
  if (navFrame) return;
  navFrame = requestAnimationFrame(() => {
    navFrame = 0;
    updateActiveNav();
  });
};

window.addEventListener('scroll', scheduleNavUpdate, { passive: true });

if (root.dataset.reveal !== undefined) {
  const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal-item]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      },
      // Fire a little before the element is fully in view, so the motion has
      // finished by the time it reaches comfortable reading position.
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );
    revealItems.forEach((item) => observer.observe(item));
  } else {
    delete root.dataset.reveal;
  }
}

languageToggle?.addEventListener('click', () => {
  const language = root.lang === 'km' ? 'en' : 'km';
  setLanguage(language);
  rememberLanguage(language);
  // Swapping copy reflows every section, so the active link must be recomputed —
  // no scroll event fires on its own.
  updateActiveNav();
});

const preferred = storedLanguage();
if (preferred && preferred !== root.lang) setLanguage(preferred);
updateActiveNav();

// /projects/ lists each project as a collapsed <details>. A #hash link (the home
// page's "See more") should land on that project already open. The browser has
// already scrolled while the card was collapsed — often clamped short, because the
// collapsed list is not tall enough — so open it without the height animation
// (data-instant, see global.css) and scroll again once it has its full height.
const openHashTarget = () => {
  const target = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
  if (!(target instanceof HTMLDetailsElement)) return;
  target.dataset.instant = '';
  target.open = true;
  target.scrollIntoView({ behavior: 'instant' });
  requestAnimationFrame(() => delete target.dataset.instant);
};
openHashTarget();
window.addEventListener('hashchange', openHashTarget);
