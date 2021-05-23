const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js')

let glasgow;
let manchester;
let ship;
let itinerary;

beforeEach( ()=> {
  glasgow = new Port('Glasgow');
  manchester = new Port('Manchester');
  itinerary = new Itinerary([manchester,glasgow]);
  ship = new Ship(itinerary);
});

describe('constructor', () => {
  it('creates new constructor', () => {
    expect(ship).toBeInstanceOf(Ship);
  });

  it('has starting port', () => {
    expect(ship.currentPort).toEqual(manchester);
  });

  it('has a previous port set to null', () => {
    expect(ship.previousPort).toEqual(null);
  });

  it('gets added to port on instantiation', () => {
    expect(ship.currentPort.ships).toContain(ship);
  });
})

describe('setSail', () => {
  it('can set Sail', () => {
    ship.setSail();
    expect(ship.previousPort).toEqual(manchester)
    expect(ship.previousPort.ships).not.toContain(ship)
    expect(manchester.ships).not.toContain(ship)
  });
  it('sets currentPort to null', () => {
    ship.setSail();
    expect(ship.currentPort).toEqual(null)
  });
})

describe('dock', () => {  
  it('can dock at a different port', () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toEqual(glasgow)
    expect(ship.currentPort.ships).toContain(ship)
    expect(glasgow.ships).toContain(ship)
  })
})