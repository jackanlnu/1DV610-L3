import '../slots-game/index.js'
import '../game-center-home/index.js'

const template = document.createElement('template')
template.innerHTML = `
  <style>
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
      width: 70vw;
      height: 50vw;
      border: solid 1px black;
      padding: 1em;
    }
    main{
      width: 80%;
      height: 70%;
    }
  </style>
  <div class="container">
    <header>
      <p class="userNameDisplay"></p>
      <p class="coinsDisplay"></p>
    </header>
    <main></main>
  </div>
`

customElements.define('game-center',
  class extends HTMLElement {
    #container
    #userNameDisplay
    #coinsDisplay
    #main

    #slotsGame
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#container = this.shadowRoot.querySelector('.container')
      this.#userNameDisplay = this.shadowRoot.querySelector('.userNameDisplay')
      this.#coinsDisplay = this.shadowRoot.querySelector('.coinsDisplay')
      this.#main = this.shadowRoot.querySelector('main')

      this.#slotsGame = document.createElement('slots-game')
    }

    connectedCallback(){
      this.#displayHome()

      this.#updateCoinsDisplay()

      this.#slotsGame.addEventListener('win', (event) => this.#addWin(event))
      if (!localStorage.getItem('game-center-coins')) {
        localStorage.setItem('game-center-coins', JSON.stringify(100))
      }
    }

    #changeDisplay(destination){
      switch (destination) {
        case 'home':
          this.#displayHome()
          break;

        case 'slots-game':
          this.#displaySlots()
          break;
      
        default:
          break;
      }
    }

    #displayHome(){
      this.clearElement(this.#main)
      const home = document.createElement('game-center-home')
      home.addEventListener('changeDisplay', (event) => this.#changeDisplay(event.detail.displayElement))
      this.#main.appendChild(home)
    }

    #displaySlots(){
      
    }

    #addWin(event){
      localStorage.setItem('game-center-coins', JSON.parse(localStorage.getItem('game-center-coins')) + event.detail.amount)
      this.#updateCoinsDisplay()
    }

    #updateCoinsDisplay(){
      this.#coinsDisplay.textContent = localStorage.getItem('game-center-coins')
    }

    clearElement (element) {
      while (element.firstChild) {
        element.removeChild(element.lastChild)
      }
    }
  }
)