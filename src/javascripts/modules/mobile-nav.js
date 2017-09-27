const menuTrigger = document.querySelector('.global-navigation__icon-menu');
const menuContainer = document.querySelector('.global-navigation__inner');

menuTrigger.addEventListener('click', () => {
  menuContainer.classList.toggle('menu--active');
})