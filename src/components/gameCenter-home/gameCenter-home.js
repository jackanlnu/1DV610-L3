const template = document.createElement('template')
template.innerHTML = `
  <style></style>
  <div class="container"></div>
`

customElements.define('gameCenter-home',
  class extends HTMLElement {
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
  }
)