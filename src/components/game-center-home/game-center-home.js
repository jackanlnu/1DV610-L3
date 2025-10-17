const template = document.createElement('template')
template.innerHTML = `
  <style>
    .container{
      display: grid;
    }
  </style>
  <div class="container">
    <button id=""></button>
    <button id=""></button>
    <button id=""></button>
    <button id=""></button>
  </div>
`

customElements.define('game-center-home',
  class extends HTMLElement {
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
  }
)