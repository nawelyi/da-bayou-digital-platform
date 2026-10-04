const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

function closeNavigation() {
  navToggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
  document.body.classList.remove('nav-open');
  const label = navToggle?.querySelector('.sr-only');
  if (label) label.textContent = 'Open navigation';
}

navToggle?.addEventListener('click', () => {
  const willOpen = navToggle.getAttribute('aria-expanded') !== 'true';
  navToggle.setAttribute('aria-expanded', String(willOpen));
  nav?.classList.toggle('is-open', willOpen);
  document.body.classList.toggle('nav-open', willOpen);
  const label = navToggle.querySelector('.sr-only');
  if (label) label.textContent = willOpen ? 'Close navigation' : 'Open navigation';
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavigation));
window.addEventListener('resize', () => {
  if (window.innerWidth > 980) closeNavigation();
});

const menuLightbox = document.querySelector('[data-menu-lightbox]');
const menuLightboxImage = menuLightbox?.querySelector('[data-menu-lightbox-image]');
const menuLightboxTitle = menuLightbox?.querySelector('[data-menu-lightbox-title]');
const menuLightboxClose = menuLightbox?.querySelector('[data-menu-lightbox-close]');
let lastMenuTrigger;

document.querySelectorAll('[data-menu-image]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    if (!menuLightbox || !menuLightboxImage || !menuLightboxTitle) return;

    lastMenuTrigger = trigger;
    menuLightboxImage.src = trigger.dataset.menuImage;
    menuLightboxImage.alt = trigger.dataset.menuAlt;
    menuLightboxTitle.textContent = trigger.dataset.menuTitle;
    menuLightbox.showModal();
    document.body.classList.add('lightbox-open');
  });
});

menuLightboxClose?.addEventListener('click', () => menuLightbox.close());
menuLightbox?.addEventListener('click', (event) => {
  if (event.target === menuLightbox) menuLightbox.close();
});
menuLightbox?.addEventListener('close', () => {
  document.body.classList.remove('lightbox-open');
  lastMenuTrigger?.focus();
});

document.querySelectorAll('[data-year]').forEach((year) => {
  year.textContent = String(new Date().getFullYear());
});
