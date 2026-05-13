const toggle = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__menu');
const header = document.querySelector('.header');
const footerYear = document.querySelector('#footer-year');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('navbar__menu--open');

    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('navbar__menu--open')) {
      menu.classList.remove('navbar__menu--open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
      toggle.focus();
    }
  });
}

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
}

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}