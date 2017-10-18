require('smoothscroll-polyfill').polyfill()

export default class HomeScrollNavigation {
  constructor(el) {
    this.el = el
    this.setupDOM()
    this.bindEvents()
    this.initIntersection()
  }

  setupDOM() {
    this.navLinks = this.el.querySelectorAll('.home__scroll-navigation__inner__links')
    this.homeSections = this.el.querySelectorAll('.section')
  }

  bindEvents() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', this.scrollTrigger.bind(this))
    })
  }

  scrollTrigger(e) {
    e.preventDefault()
    let targetedSection = e.currentTarget.getAttribute('href').replace(/"/g, '')
    this.domTarget = document.querySelector(targetedSection)
    this.domTarget.scrollIntoView({ behavior: 'smooth' })
  }

  initIntersection() {
    const options = {
      root: null,
      threshold: [0.2, 0.8]
    }

    const observer = new IntersectionObserver(this.onEntry.bind(this), options, options)

    this.homeSections.forEach(item => {
      observer.observe(item)
    })
  }

  onEntry(entries, observer) {
    entries.map((entry, currentIndex) => {
      if (entry.isIntersecting) {
        this.domTarget = document.querySelector(`[href='#${entry.target.dataset.navItem}']`)
        this.domTarget.classList.toggle('home__scroll-navigation__inner__links--active')
      }
    })
  }
}
