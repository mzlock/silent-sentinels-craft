export default class HomeQuoteSwap {
  constructor(el) {
    this.el = el
    this.setupDOM()
    this.bindEvents()
  }

  setupDOM() {
    this.quotations = Array.from(this.el.querySelectorAll('.museum__quote'))
    this.quoteSayers = Array.from(
      this.el.querySelectorAll('.home__campaign-museum__quotes__quote__cite__person')
    )

    this.quoteList
  }

  bindEvents() {
    this.quoteSayers.map(sayer => {
      sayer.addEventListener('click', this.triggerQuoteChange.bind(this))
    })
  }

  hideAll() {
    this.quotations.map(quote => {
      quote.classList.add('is-hiding')
    })
  }

  triggerQuoteChange(e) {
    this.ariaId = e.target.getAttribute('aria-controls')
    this.quoteTriggered = document.querySelector(`#${this.ariaId}`)
    this.quoteClassList = this.quoteTriggered.classList
    this.hideAll()

    this.triggered == this.quoteClassList.toggle('is-hiding')
  }
}
