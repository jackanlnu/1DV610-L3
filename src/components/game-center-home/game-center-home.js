const template = document.createElement('template')
template.innerHTML = `
  <style>
    .container{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2vw;
      padding: 2vw;
      border: solid 1px black;
      border-radius: 1em;
      background-color: #a8f9ff;
    }
  </style>
  <div class="container">
    <button id="slots-game">Slots game</button>
    <button id=""></button>
    <button id=""></button>
    <button id=""></button>
  </div>
`

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