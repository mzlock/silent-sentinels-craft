export default class HomeQuoteSwap {
  constructor(el) {
    this.el = el
    this.setupDOM()
    this.bindEvents()
  }

  setupDOM() {
    this.quotations = [...this.el.querySelectorAll('.museum__quote')]
    this.quoteSayers = [
      ...this.el.querySelectorAll('.home__campaign-museum__quotes__quote__cite__person')
    ]
    this.quoteList
  }

  bindEvents() {
    //   this.menuTrigger.addEventListener('click', this.onClick.bind(this))
    //   window.addEventListener('resize', this.onResize.bind(this))
    // console.log(this.quotations)

    this.quoteSayers.map(sayer => {
      sayer.addEventListener('click', this.triggerQuoteChange.bind(this))
    })
  }

  triggerQuoteChange() {
    alert('working')
    // quotations.forEach(quote => {
    //   hiding(quote)
    // })
    // add(quote)
  }

  // onClick() {
  //   this.isOpen = !this.isOpen
  //   this.menuContainer.classList.toggle('menu--active', this.isOpen)
  //   this.htmlElement.classList.toggle('menu--overflow', this.isOpen)
  //   this.menuTrigger.setAttribute('aria-expanded', this.isOpen)

  //   this.shouldHide()
  // }

  // onResize() {
  //   this.viewportWidth = document.documentElement.clientWidth
  //   this.shouldHide()
  // }

  // shouldHide() {
  //   let ariaHidden = this.viewportWidth < this.breakpoint && !this.isOpen ? 'true' : 'false'
  //   this.menuContainer.setAttribute('aria-hidden', ariaHidden)
  // }
}

// function quoteFunct(item) {
//   return (quoteList = item.classList)
// }

// function hiding(item) {
//   let quoteItem = quoteFunct(item)
//   quoteItem.remove('isHiding')
// }

// function add(item) {
//   let quoteItem = quoteFunct(item)
//   quoteItem.add('isHiding')
// }

// quotations.map(quote => {
//   quote.addEventListener('click', () => {
//     quotations.forEach(quote => {
//       hiding(quote)
//     })
//     add(quote)
//   })
// })
