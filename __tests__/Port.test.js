const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');

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
describe('Port', () => {
  it('creates a port object', () => {
    expect(glasgow).toBeInstanceOf(Port);
  });
  it('creates a port object with a name', () => {
    expect(glasgow.name).toEqual('Glasgow');
  });
  it('creates a port object containing to ships', () => {
    expect(glasgow.ships).toEqual([]);
  });
});

describe("addShip", () => {
  it('adds ship object to port', () => {
    glasgow.addShip(ship);
    expect(glasgow.ships[0]).toBe(ship);
  });
});

describe('removeShip', () => {
  it('removes ship object from port', () => {
    glasgow.addShip(ship);
    glasgow.removeShip(ship);
    expect(glasgow.ships).toEqual([]);
  });
});