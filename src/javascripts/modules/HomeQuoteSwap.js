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
  }

  bindEvents() {
    this.quoteSayers.map(sayer => {
      sayer.addEventListener('click', this.triggerQuoteChange.bind(this))
      sayer.addEventListener('keyup', this.triggerQuoteChangeKeyboard.bind(this))
    })
  }

  hideAll() {
    this.quoteSayers.map(sayer => {
      sayer.classList.remove('cite__person--active')
    })
    this.quotations.map(quote => {
      quote.classList.add('is-hiding')
    })
  }

  triggerQuoteChangeKeyboard(e) {
    if (e.keyCode === 13) {
      this.triggerQuoteChange(e)
    }
  }

  triggerQuoteChange(e) {
    const sayer = e.currentTarget
    const quoteId = sayer.getAttribute('aria-controls')
    const quoteTriggered = this.quotations.find(quote => quote.getAttribute('id') === quoteId)

    this.hideAll()
    sayer.classList.add('cite__person--active')
    quoteTriggered.classList.remove('is-hiding')
  }
}
