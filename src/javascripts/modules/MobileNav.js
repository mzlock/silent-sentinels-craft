export default class MobileNav {
  constructor(el) {
    this.el = el
    this.setupDOM()
    this.bindEvents()
    this.shouldHide()
  }

  setupDOM() {
    this.menuTrigger = this.el.querySelector('.global-navigation__icon-menu')
    this.menuContainer = this.el.querySelector('.global-navigation__inner')
    this.menuContainer.classList.add('menu--transition')
    this.htmlElement = document.querySelector('html')
    this.siteContainer = document.getElementById('site-container')

    this.navLinks = this.menuContainer.querySelectorAll('.global-navigation__inner a')
    this.breakpoint = 1200
    this.viewportWidth = document.documentElement.clientWidth
    this.isOpen = this.viewportWidth > this.breakpoint ? true : false
  }

  bindEvents() {
    this.menuTrigger.addEventListener('click', this.onClick.bind(this))
    this.menuTrigger.addEventListener('keyup', this.tabOpenNav.bind(this))
    this.menuContainer.addEventListener('keyup', this.closeNav.bind(this))
    this.navLinks[this.navLinks.length - 1].addEventListener('keyup', this.lockFocus.bind(this))
    window.addEventListener('resize', this.onResize.bind(this))
  }

  onClick() {
    this.isOpen = !this.isOpen
    this.menuContainer.classList.toggle('menu--active', this.isOpen)
    this.htmlElement.classList.toggle('menu--overflow', this.isOpen)
    this.menuTrigger.setAttribute('aria-expanded', this.isOpen)
    this.siteContainer.setAttribute('tab-index', '-1')
    this.shouldHide()
  }

  lockFocus(e) {
    if (e.currentTarget === this.navLinks[this.navLinks.length - 1]) {
      this.menuTrigger.focus()
    }
  }

  tabOpenNav(e) {
    e.keyCode === 9 ? this.onClick() : null
  }

  onResize() {
    this.viewportWidth = document.documentElement.clientWidth

    if (this.viewportWidth > 1000) {
      this.htmlElement.classList.remove('menu--overflow')
    } else if (this.viewportWidth < 1000) {
      this.menuContainer.classList.remove('menu--active')
      this.shouldHide()
    }
  }

  closeNav(e) {
    if (this.menuContainer.classList.contains('menu--active') && e.keyCode === 27) {
      this.onClick()
    }
  }

  shouldHide() {
    let ariaHidden = this.viewportWidth < this.breakpoint && this.isOpen
    this.menuContainer.setAttribute('aria-hidden', ariaHidden)
  }
}
