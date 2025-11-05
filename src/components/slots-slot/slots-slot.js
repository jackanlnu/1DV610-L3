import { template } from "./slots-slot-template.js";

import { arrayHelper} from "../../arrayHelper/index.js";
const helper = new arrayHelper();

customElements.define('slots-slot',
  class extends HTMLElement {
    #slot
    #odds
    #value
    #intervalId
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#slot = this.shadowRoot.getElementById('slot')

      this.#odds = [1, 1, 1, 2, 3,]
    }

    getValue(){
      return this.#value
    }

    spin(){
      this.#value = helper.getRandom(this.#odds)
      this.#slot.innerHTML = this.#value
    }

    resetValue(){
      this.#value = undefined
      this.#slot.innerHTML = ''
    }
  }
)