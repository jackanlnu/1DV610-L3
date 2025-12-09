import { jest } from '@jest/globals'

import '../src/components/slots-game/index.js'

jest.useFakeTimers('modern')

jest.mock('../src/components/slots-slot/index.js', () => {
  customElements.define('slots-slot', class extends HTMLElement {
    #value = 1
    getValue() {
      return this.#value
    }
    setValue(value) {
      this.#value = value
    }
    spin() {}
    stop() {}
    reset() {}
  })
})

describe('slots-game class, test suite', () => {
  let slotsGame

  beforeEach(() => {
    slotsGame = document.createElement('slots-game')
    document.body.appendChild(slotsGame)
  })

  afterEach(() => {
    document.body.removeChild(slotsGame)
  })

  test('should Dispatch Win Event if All Slots Have Same Number', async () => {
    const winListener = jest.fn()
    slotsGame.addEventListener('win', winListener)
    
    const button = slotsGame.shadowRoot.querySelector('button')
    button.click()

    await jest.advanceTimersByTimeAsync(3700)

    await Promise.resolve()
    
    expect(winListener).toHaveBeenCalled()
  })
})