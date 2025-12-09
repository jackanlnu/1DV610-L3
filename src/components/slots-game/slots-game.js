import "../slots-slot/index.js"

import { template } from "./slots-game-template.js";

customElements.define('slots-game',
  class extends HTMLElement {
    #button
    #main

    #slots = []
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#button = this.shadowRoot.querySelector('button')
      this.#main = this.shadowRoot.querySelector('main')
    }

    connectedCallback(){
      for (let i = 0; i < 3; i++) {
        this.#slots.push(document.createElement('slots-slot')) 
        this.#main.appendChild(this.#slots[i])
      }

      this.#button.addEventListener('click', () => this.#spinSlots())
    }

    async #spinSlots(){
      this.#button.disabled = true;
      for (let i = 0; i < this.#slots.length; i++) {
        this.#slots[i].reset()
        this.#slots[i].spin()
      }
      await this.#setDelay(700)
      for (let i = 0; i < this.#slots.length; i++) {
        await this.#setDelay(1000)
        this.#slots[i].stop()
      }
      this.#button.disabled = false
      if(this.#checkIfWin()){
        this.#sendWinEvent(this.#getWinAmonut())
      }
    }

    #setDelay(miliseconds) {
      return new Promise(resolve => { setTimeout(resolve, miliseconds) })
    } 

    #checkIfWin(){
      if(this.#slots[0].getValue() === this.#slots[1].getValue() && this.#slots[1].getValue()  === this.#slots[2].getValue()){
        return true
      }
      return false
    }

    #getWinAmonut(){
      switch(this.#slots[0].getValue()){
        case 1:
          return 100
        case 2:
        case 3:
          return 250
      }
    }

    #sendWinEvent(winAmonut){
      this.dispatchEvent(new CustomEvent('win', {
        bubbles: true,
        composed: true,
        detail: {
          amount: winAmonut
        }
      }))
    }
  }
)