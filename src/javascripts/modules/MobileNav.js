export default class MobileNav {
  constructor(el) {
    this.el = el
    this.setupDOM()
    this.bindEvents()
    this.sizeEvent()
    this.checkInitialWidth()
  }

  setupDOM() {
    this.menuTrigger = this.el.querySelector('.global-navigation__icon-menu')
    this.menuContainer = this.el.querySelector('.global-navigation__inner')
    this.htmlElement = document.querySelector('html')

    this.htmlElement.setAttribute('data-js', 'hasJs')
    this.menuContainer.classList.add('menu--transition')
  }

  bindEvents() {
    this.menuTrigger.addEventListener('click', this.clickEvent.bind(this))
  }

  clickEvent() {
    this.menuContainer.classList.toggle('menu--active')
    this.htmlElement.classList.toggle('menu--overflow')

    if (this.menuContainer.classList.contains('menu--active')) {
      this.menuTrigger.setAttribute('aria-expanded', 'true')
    } else {
      this.menuTrigger.setAttribute('aria-expanded', 'false')
    }
  }

  checkInitialWidth() {
    if (document.documentElement.clientWidth < 900) {
      this.menuContainer.setAttribute('aria-hidden', 'true')
    }
  }

  sizeEvent() {
    window.addEventListener('resize', () => {
      if (
        document.documentElement.clientWidth < 900 &&
        this.menuContainer.getAttribute('aria-expanded') != 'true'
      ) {
        this.menuContainer.setAttribute('aria-hidden', 'true')
      } else if (
        document.documentElement.clientWidth > 900 &&
        this.menuContainer.getAttribute('aria-expanded') != 'true'
      ) {
        this.menuContainer.setAttribute('aria-hidden', 'false')
      }
    })
  }
}
