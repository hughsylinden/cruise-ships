const Port = require('../src/Port.js');

let glasgow;
let manchester;
let ship;
beforeEach( ()=> {
  glasgow = new Port('Glasgow');
  manchester = new Port('Manchester');
  ship = jest.fn();
});
describe('Port', () => {
  it('creates a port object', () => {
    expect(glasgow).toBeInstanceOf(Port);
  });
  it('creates a port object with a name', () => {
    expect(glasgow.name).toEqual('Glasgow');
  });
  it('creates a ships property which is an empty array', () => {
    expect(glasgow.ships).toEqual([]);
  });
});

describe("addShip", () => {
  it('adds a ship object to port', () => {
    glasgow.addShip(ship);
    expect(glasgow.ships[0]).toBe(ship);
  });
});

describe('removeShip', () => {
  it('removes a ship object from port', () => {
    glasgow.addShip(ship);
    glasgow.removeShip(ship);
    expect(glasgow.ships).toEqual([]);
  });
});