const Ship = require('../src/Ship.js')

describe('constructor', () => {

  const ship = new Ship('manchester');
  it('creates new constructor', () => {
    expect(ship).toBeInstanceOf(Ship)
  })

  it('has starting port', () => {
    expect(ship.startingPort).toEqual('manchester');
  })
})

describe('constructor', () => {

  const ship = new Ship('manchester');
  ship.setSail();
  it('sets sail from port', () => {
    expect(ship.startingPort).toEqual(null)
  })
})