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

  test('should add coins if win event is dispatched', () => {
    const winEvent = new CustomEvent('win', {
      detail: { amount: 100 },
      bubbles: true,
      composed: true
    })
    gameCenter.dispatchEvent(winEvent)
    
    expect(localStorage.getItem('game-center-coins')).toBe('100')
  })
})