import '../slots-game/index.js'
import '../game-center-home/index.js'

import { template } from './game-center-template.js'

customElements.define('game-center',
  class extends HTMLElement {
    #container
    #returnHomeButton
    #userNameDisplay
    #coinsDisplay
    #main
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#container = this.shadowRoot.querySelector('.container')
      this.#returnHomeButton = this.shadowRoot.getElementById('returnHomeButton')
      this.#userNameDisplay = this.shadowRoot.querySelector('.userNameDisplay')
      this.#coinsDisplay = this.shadowRoot.querySelector('.coinsDisplay')
      this.#main = this.shadowRoot.querySelector('main')
    }

    connectedCallback(){
      if(!localStorage.getItem('game-center-username')) {
        this.#displayNewUserForm()
      } else {
        this.#displayHome()
      }
      this.#updateCoinsDisplay()
      this.#updateUsernameDisplay()

      this.#returnHomeButton.addEventListener('click', () => this.#changeDisplay('home'))

      if (!localStorage.getItem('game-center-coins')) {
        localStorage.setItem('game-center-coins', JSON.stringify(100))
      }
    }

    #changeDisplay(destination){
      this.clearElement(this.#main)
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

    #displayNewUserForm(){
      const newUserForm = document.createElement('form')
      newUserForm.innerHTML = `
        <input type="text" name="username">
        <input type="submit" value="Submit">
      `
      newUserForm.addEventListener('submit', (event) => this.#submitNewUser(event))
      this.#main.appendChild(newUserForm)
    }

    #submitNewUser(event){
      event.preventDefault()
      const data = new FormData(event.target)
      localStorage.setItem('game-center-username', JSON.stringify([...data.entries()][0][1]))
    }

    #displayHome(){
      this.#returnHomeButton.hidden = true
      const home = document.createElement('game-center-home')
      home.addEventListener('changeDisplay', (event) => this.#changeDisplay(event.detail.displayElement))
      this.#main.appendChild(home)
    }

    #displaySlots(){
      this.#returnHomeButton.hidden = false
      const slotsGame = document.createElement('slots-game')
      slotsGame.addEventListener('win', (event) => this.#addWin(event))
      this.#main.appendChild(slotsGame)
    }

    #addWin(event){
      localStorage.setItem('game-center-coins', JSON.parse(localStorage.getItem('game-center-coins')) + event.detail.amount)
      this.#updateCoinsDisplay()
    }

    #updateCoinsDisplay(){
      this.#coinsDisplay.textContent = localStorage.getItem('game-center-coins')
    }

    #updateUsernameDisplay(){
      this.#userNameDisplay.textContent = localStorage.getItem('game-center-username')
    }

    clearElement (element) {
      while (element.firstChild) {
        element.removeChild(element.lastChild)
      }
    }
  }
)