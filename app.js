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

const menuTabs = [...document.querySelectorAll('[data-menu-tab]')];
const menuPanels = [...document.querySelectorAll('[data-menu-panel]')];

function selectMenuTab(selectedTab) {
  const target = selectedTab.dataset.menuTab;
  menuTabs.forEach((tab) => {
    const isSelected = tab === selectedTab;
    tab.setAttribute('aria-selected', String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
  });
  menuPanels.forEach((panel) => {
    panel.hidden = panel.dataset.menuPanel !== target;
  });
}

menuTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectMenuTab(tab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(event.key)) return;
    event.preventDefault();
    const moveForward = event.key === 'ArrowRight' || event.key === 'ArrowDown';
    const nextIndex = (index + (moveForward ? 1 : -1) + menuTabs.length) % menuTabs.length;
    menuTabs[nextIndex].focus();
    selectMenuTab(menuTabs[nextIndex]);
  });
});

document.querySelectorAll('[data-year]').forEach((year) => {
  year.textContent = String(new Date().getFullYear());
});
