import { arrayHelper} from "../../../arrayHelper/index.js";

const helper = new arrayHelper();

const template = document.createElement('template')
template.innerHTML = `
  <style>
    h1{
      width: fit-content;
      font-size: 8vw;
      margin: 0;
    }
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5%;
      padding: 1em 0;
      border: solid 2px black;
      width: 100%;
      height: 100%;
      background-color: aquamarine;
      border-radius: 0.5em;
    }
    main{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 5vw;
      width: 90%;
      height: 70%;
      border: solid 2px black;
      border-radius: 2em;
      background-color: azure;
    }
    .slot{
      display: flex;
      width: 25%;
      height: 75%;
      background-color: grey;
      font-size: 10vw;
      align-items: center;
      justify-content: center;
      border-radius: 0.5em;
    }
    button{
      width: 15%;
      height: 20%;
      border-radius: 50%;
      font-size: 3vw;
      background-color: red;
    }
  </style>
  <div class="container">
    <h1>Slot Game</h1>
    <main>
      <div class="slot"></div>
      <div class="slot"></div>
      <div class="slot"></div>
    </main>
    <button>Spin</button>
  </div>
`

customElements.define('slots-game',
  class extends HTMLElement {

    #button

    #slots

    #slotDisplayItems
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#button = this.shadowRoot.querySelector('button')
      this.#slots = this.shadowRoot.querySelectorAll('.slot')

      this.#slotDisplayItems = [1, 1, 1, 2, 3, 4]
    }

    connectedCallback(){
      this.#button.addEventListener('click', () => this.#spin())
    }

    #spin(){
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