const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js')

describe('constructor', () => {

  const port = new Port('Manchester')
  const ship = new Ship(port);

  it('creates new constructor', () => {
    expect(ship).toBeInstanceOf(Ship)
  })

  it('has starting port', () => {
    expect(ship.startingPort).toEqual(port);
  })
})

describe('setSail', () => {

  const ship = new Ship('manchester');
  ship.setSail();
  it('sets sail from port', () => {
    expect(ship.startingPort).toEqual(null)
  })
})

describe('dock', () => {

  const manchester = new Port('Manchester')
  const ship = new Ship('Glasgow');
  const glasgow = new Port('Glasgow')
  ship.setSail();
  ship.dock(glasgow);
  
  it('can dock at a new port', () => {
    expect(ship.currentPort).toEqual(glasgow)
  })
})