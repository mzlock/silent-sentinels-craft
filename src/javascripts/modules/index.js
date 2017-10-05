/*
  Automatically instantiates modules based on data-attributes
  specifying module file-names.
*/

const moduleElements = document.querySelectorAll('[data-module]')

for (var i = 0; i < moduleElements.length; i++) {
  const el = moduleElements[i]
  const name = el.getAttribute('data-module')
  const Module = require(`./${name}`).default
  new Module(el)
}

/*
  Usage:
  ======

  html
  ----
  <button data-module="disappear">disappear!</button>

  js
  --
  // modules/disappear.js
  export default class Disappear {
    constructor(el) {
      el.style.display = 'none'
    }
  }
*/

const quotations = [...document.querySelectorAll('.museum__quote')]

let quoteList

function quoteFunct(item) {
  return (quoteList = item.classList)
}

function hiding(item) {
  let quoteItem = quoteFunct(item)
  quoteItem.remove('isHiding')
}

function add(item) {
  let quoteItem = quoteFunct(item)
  quoteItem.add('isHiding')
}

quotations.map(quote => {
  quote.addEventListener('click', () => {
    quotations.forEach(quote => {
      hiding(quote)
    })
    add(quote)
  })
})
