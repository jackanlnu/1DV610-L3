import { jest } from '@jest/globals'

import '../src/components/slots-game/index.js'

jest.mock('../src/components/slots-slot/index.js')

describe('slots-game class, test suite', () => {
  let slotsGame

  beforeEach(() => {
    slotsGame = document.createElement('slots-game')
    document.body.appendChild(slotsGame)
  })
})