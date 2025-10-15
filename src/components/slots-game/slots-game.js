const template = document.createElement('template')
template.innerHTML = `
  
`

customElements.define('slots-game',
  class extends HTMLElement {
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
  }
)