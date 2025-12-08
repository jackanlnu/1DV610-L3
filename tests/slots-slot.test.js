import '../src/components/slots-slot/index.js'

describe('slots-slot class, test suite', () => {
  let slot

  beforeEach(() => {
    slot = document.createElement('slots-slot')
    document.body.appendChild(slot)
  })

  afterEach(() => {
    document.body.removeChild(slot)
  })
})