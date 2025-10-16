const template = document.createElement('template')
template.innerHTML = `
  <div class="container"></div>
`

customElements.define('game-center',
  class extends HTMLElement {
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
  }
)