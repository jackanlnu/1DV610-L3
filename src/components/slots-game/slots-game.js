const template = document.createElement('template')
template.innerHTML = `
  <div class="container">
    <h1></h1>
    <main>
      <div class="slot"></div>
      <div class="slot"></div>
      <div class="slot"></div>
    </main>
    <button></button>
  </div>
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