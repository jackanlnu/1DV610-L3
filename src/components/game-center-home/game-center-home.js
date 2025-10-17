import { template } from "./game-center-home-template"

customElements.define('game-center-home',
  class extends HTMLElement {
    #slotsButton
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#slotsButton = this.shadowRoot.getElementById('slots-game')
    }

    connectedCallback(){
      this.#slotsButton.addEventListener('click', () => this.#sendEvent('slots-game'))
    }

    #sendEvent(eventInfo){
      this.dispatchEvent(new CustomEvent('changeDisplay', {
        bubbles: true,
        composed: true,
        detail: {
          displayElement: eventInfo
        }
      }))
    }
  }
)