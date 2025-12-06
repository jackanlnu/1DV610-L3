import '../slots-game/index.js'

import { template } from './game-center-template.js'

customElements.define('game-center',
  class extends HTMLElement {
    #coinsDisplay
    #main
    #slotsGame

    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#coinsDisplay = this.shadowRoot.querySelector('.coinsDisplay')
      this.#main = this.shadowRoot.querySelector('main')
      
      this.#slotsGame = document.createElement('slots-game')
    }

    connectedCallback(){
      if (!localStorage.getItem('game-center-coins')) {
        localStorage.setItem('game-center-coins', JSON.stringify(0))
      }
      this.#updateCoinsDisplay()

      this.#main.appendChild(this.#slotsGame)
      this.addEventListener('win', (event) => this.#addWin(event))
    }

    #addWin(event){
      localStorage.setItem('game-center-coins', JSON.parse(localStorage.getItem('game-center-coins')) + event.detail.amount)
      this.#updateCoinsDisplay()
    }

    #updateCoinsDisplay(){
      this.#coinsDisplay.textContent = 'Coins: ' + localStorage.getItem('game-center-coins')
    }
  }
)