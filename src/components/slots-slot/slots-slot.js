import { template } from "./slots-game-template.js";

import { arrayHelper} from "../../arrayHelper/index.js";
const helper = new arrayHelper();

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
      this.#slot.innerHTML = helper.getRandom(this.#odds)
    }
  }
)