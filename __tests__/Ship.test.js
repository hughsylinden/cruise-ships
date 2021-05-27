const Ship = require('../src/Ship.js')

let manchester;
let glasgow;
let itinerary;
let ship;
describe('constructor', () => {
  beforeEach( ()=> {
    manchester = { 
      addShip: jest.fn()
    }
    glasgow = { 
      addShip: jest.fn()
    }
    itinerary = { ports: [manchester,glasgow] }
    ship = new Ship(itinerary);
  });
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
    expect(ship.currentPort.addShip).toHaveBeenCalled();
  });
})
beforeEach( ()=> {
  manchester = { 
    ships: [],
    addShip: jest.fn(),
    removeShip: jest.fn()
  }
  glasgow = { 
    ships: [],
    addShip: jest.fn(),
    removeShip: jest.fn()
  }
  itinerary = { ports: [manchester,glasgow] }
  ship = new Ship(itinerary);
  ship.setSail();
});
describe('setSail', () => {  
  it('removes the ship from the ports ships', () => {  
    expect(manchester.removeShip).toHaveBeenCalled()
  });

  it('removes the ship from the previous port property property of the ship object', () => {
    expect(ship.previousPort.removeShip).toHaveBeenCalled()
  });
  it('sets previousPort to the currentPort', () => {
    expect(ship.previousPort).toEqual(manchester)
  });
  it('sets currentPort to null', () => {
    expect(ship.currentPort).toEqual(null)
  });
})

describe('dock', () => {  
  it('can dock at a different port', () => {
    ship.dock();
    expect(ship.currentPort).toEqual(glasgow)
    expect(ship.currentPort.addShip).toHaveBeenCalled()
    expect(glasgow.addShip).toHaveBeenCalled()
  })
})