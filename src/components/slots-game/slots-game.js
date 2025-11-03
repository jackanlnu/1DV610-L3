import { arrayHelper} from "../../arrayHelper/index.js";

import { template } from "./slots-game-template.js";

const helper = new arrayHelper();

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

      for (let i = 0; i < 3; i++) {
        this.#slots.push(document.createElement('slots-slot')) 
      }
      for (let i = 0; i < 3; i++) {
        this.#main.appendChild(this.#slots[i])
      }
    }

    connectedCallback(){
      this.#button.addEventListener('click', () => this.#spinSlots())
    }

    #spinSlots(){
      this.#button.disabled = true;
      for (let i = 0; i < this.#slots.length; i++) {
        this.#slots[i].innerHTML = ''
      }
      for (let i = 0; i < this.#slots.length; i++) {
        setTimeout(() => {
          this.#slots[i].innerHTML = helper.getRandom(this.#slotDisplayItems)
          if (i === this.#slots.length - 1) {
            this.#button.disabled = false
            if(this.#checkIfWin()){
              this.dispatchEvent(new CustomEvent('win', {
                bubbles: true,
                composed: true,
                detail: {
                  amount: 100
                }
              }))
            }
          }
        }
        , 1000 * (i + 1));
      }
    }

    #checkIfWin(){
      if(this.#slots[0].innerHTML === this.#slots[1].innerHTML && this.#slots[1].innerHTML  === this.#slots[2].innerHTML){
        return true
      }
      else{
        return false
      }
    }
  }
)