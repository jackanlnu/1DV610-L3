import { template } from "./slots-game-template.js";

customElements.define('slots-slot',
  class extends HTMLElement {
    #slot
    #odds
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#slot = this.shadowRoot.getElementById('slot')

      this.#odds = [1, 1, 1, 2, 3,]
    }

    
    spin(){
      
    }
  }
)