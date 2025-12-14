import { jest } from '@jest/globals'

jest.useFakeTimers('modern')

jest.unstable_mockModule('../src/components/slots-slot/index.js', () => {
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
  return{}
})

await import('../src/components/slots-game/index.js')

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
    const winPromise = new Promise(resolve => {
      slotsGame.addEventListener('win', e => resolve(e), { once: true })
    })
    
    slotsGame.shadowRoot.querySelector('button').click()

    await jest.advanceTimersByTimeAsync(4000)
    
    const event = await winPromise
    expect(event).toBeDefined()
  }, 10000)
})