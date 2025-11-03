import { template } from "./slots-game-template.js";

customElements.define('slots-slot',
  class extends HTMLElement {
    #slot
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#slot = this.shadowRoot.getElementById('slot')
    }
  }
)