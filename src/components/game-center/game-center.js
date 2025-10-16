import '../slots-game/index.js'

const template = document.createElement('template')
template.innerHTML = `
  <div class="container"></div>
`

customElements.define('game-center',
  class extends HTMLElement {
    #container
    #slotsGame
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#container = this.shadowRoot.querySelector('.container')
      this.#slotsGame = document.createElement('slots-game')
    }

    connectedCallback(){
      this.#container.appendChild(this.#slotsGame)

      this.#slotsGame.addEventListener('win', () => this.#addWin())
    }
  }
)