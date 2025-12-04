import '../src/components/game-center/index.js'

describe('game-center class, test suite', () => {
  let gameCenter

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('game-center-coins', JSON.stringify(100))
    gameCenter = document.createElement('game-center')
    document.body.appendChild(gameCenter)
  })

  afterEach(() => {
    document.body.removeChild(gameCenter)
  })

  test('should add coins if win event is dispatched', () => {
    const winEvent = new CustomEvent('win', {
      detail: { amount: 50 },
      bubbles: true,
      composed: true
    });
    
    gameCenter.dispatchEvent(winEvent)
    
    expect(localStorage.getItem('game-center-coins')).toBe('150')
  })
})