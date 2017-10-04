export default class MobileNav {
  constructor(el) {
    this.el = el
    this.setupDOM()
    this.bindEvents()
  }

  setupDOM() {
    this.menuTrigger =  this.el.querySelector('.global-navigation__icon-menu');
    this.menuContainer = this.el.querySelector('.global-navigation__inner');
    this.nav = this.el.querySelector('.global-navigation');
    this.htmlElement = document.querySelector('html');

    this.htmlElement.setAttribute('data-js', 'hasJs')
    this.menuContainer.classList.add('menu--transition');
  }

  bindEvents() {
    this.menuTrigger.addEventListener('click', this.clickEvent.bind(this))
  }

  clickEvent() {
    this.menuContainer.classList.toggle('menu--active');
    this.htmlElement.classList.toggle('menu--overflow');

    if (this.menuContainer.classList.contains('menu--active')) {
      this.nav.setAttribute('aria-expanded', 'true');
    } else {
      this.nav.setAttribute('aria-expanded', 'false');
    }
  }
}