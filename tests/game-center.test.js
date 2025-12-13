import '../src/components/game-center/index.js'

describe('game-center class, test suite', () => {
  let gameCenter

  beforeEach(() => {
    gameCenter = document.createElement('game-center')
    document.body.appendChild(gameCenter)
  })

  afterEach(() => {
    document.body.removeChild(gameCenter)
  })

  test('should Create game-center-coins In localStorage', () => {
    console.log(localStorage.getItem('game-center-coins'))
    expect(localStorage.getItem('game-center-coins')).not.toBeFalsy()
  })

  test('should Add Coins if Win Event Is Dispatched', () => {
    const winEvent = new CustomEvent('win', {
      detail: { amount: 100 },
      bubbles: true,
      composed: true
    })
    gameCenter.dispatchEvent(winEvent)
    
    expect(localStorage.getItem('game-center-coins')).toBe('100')
  })

  test('should Update Coin Display if The User Has Earned More Coins', () => {
    const originalCoinsDisplay = gameCenter.shadowRoot.querySelector('.coinsDisplay').innerHTML

    const winEvent = new CustomEvent('win', {
      detail: { amount: 100 },
      bubbles: true,
      composed: true
    })
    gameCenter.dispatchEvent(winEvent)

    expect(gameCenter.shadowRoot.querySelector('.coinsDisplay').innerHTML).not.toBe(originalCoinsDisplay)
  })
})