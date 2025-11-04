import '../slots-game/index.js'

import { template } from './game-center-template.js'

customElements.define('game-center',
  class extends HTMLElement {
    #coinsDisplay

    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#coinsDisplay = this.shadowRoot.querySelector('.coinsDisplay')
    }

    connectedCallback(){
      if (!localStorage.getItem('game-center-coins')) {
        localStorage.setItem('game-center-coins', JSON.stringify(100))
      }
      this.#updateCoinsDisplay()
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