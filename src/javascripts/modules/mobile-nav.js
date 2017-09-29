const menuTrigger = document.querySelector('.global-navigation__icon-menu');
const menuContainer = document.querySelector('.global-navigation__inner');
const nav = document.querySelector('.global-navigation');
const body = document.querySelector('body');

menuTrigger.addEventListener('click', () => {
  menuContainer.classList.toggle('menu--active');
  menuContainer.classList.add('menu--transition');
  body.classList.toggle('menu--overflow');

  if (menuContainer.classList.contains('menu--active')) {
    nav.setAttribute('aria-expanded', 'true');
  }
  
  else {
    nav.setAttribute('aria-expanded', 'false');
  }
})