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

      this.#odds = [1, 1, 1, 2, 3]
    }

    getValue(){
      return this.#value
    }

    spin(){
      this.#intervalId = setInterval(() => {
        this.#slot.innerHTML = helper.getRandom(this.#odds)
      }, 300)
    }

    stop(){
      clearInterval(this.#intervalId)
      this.#intervalId = null
      this.#value = helper.getRandom(this.#odds)
      this.#slot.innerHTML = this.#value
      this.#slot.style.backgroundColor = '#04c34e'
    }

    resetValue(){
      this.#value = undefined
      this.#slot.innerHTML = ''
      this.#slot.style.backgroundColor = 'gray'
    }
  }
)