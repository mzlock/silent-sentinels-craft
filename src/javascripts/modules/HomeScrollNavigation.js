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
      rootMargin: '-100px',
      threshold: [0.1, 0.9]
    }

    const observer = new IntersectionObserver(this.onEntry.bind(this), options, options)

    this.homeSections.forEach(item => {
      observer.observe(item)
    })
  }

  onEntry(entries, observer) {
    entries.map((entry, currentIndex) => {
      this.domTarget = document.querySelector(`[href='#${entry.target.dataset.navItem}']`)
      if (
        entry.isIntersecting &&
        entry.intersectionRatio > 0.1 &&
        entry.intersectionRatio < 0.9
      ) {
        this.domTarget.classList.add('home__scroll-navigation__inner__links--active')
      } else {
        this.domTarget.classList.remove('home__scroll-navigation__inner__links--active')
      }
    })
  }
}
