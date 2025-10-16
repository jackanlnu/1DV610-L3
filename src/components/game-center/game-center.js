import '../slots-game/index.js'

const template = document.createElement('template')
template.innerHTML = `
  <div class="container">
    <header>
      <p class="userNameDisplay"></p>
      <p class="coinsDisplay"></p>
    </header>
  </div>
`

customElements.define('game-center',
  class extends HTMLElement {
    #container
    #userNameDisplay
    #coinsDisplay
    #slotsGame
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#container = this.shadowRoot.querySelector('.container')
      this.#userNameDisplay = this.shadowRoot.querySelector('.userNameDisplay')
      this.#coinsDisplay = this.shadowRoot.querySelector('.coinsDisplay')

      this.#slotsGame = document.createElement('slots-game')
    }

    connectedCallback(){
      this.#container.appendChild(this.#slotsGame)

      this.#slotsGame.addEventListener('win', (event) => this.#addWin(event))
      if (!localStorage.getItem('game-center-coins')) {
        localStorage.setItem('game-center-coins', JSON.stringify(100))
      }
    }

    #addWin(event){
      localStorage.setItem('game-center-coins', JSON.parse(localStorage.getItem('game-center-coins')) + event.detail.amount)
    }
  }
)