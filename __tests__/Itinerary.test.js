const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

describe('Itinerary', () => {
  const glasgow = new Port('Glasgow');
  const manchester = new Port('Manchester');
  const ports = [glasgow,manchester];
  const itinerary = new Itinerary(ports);
  it('creates a new Itinerary object', () => {
    expect(itinerary).toBeInstanceOf(Itinerary);
  });

  it('contains a ports property when instanciated', () => {
    expect(itinerary.ports).toEqual(ports);
  });

  it('contains a ports property with two or more ports', () => {
    expect(itinerary.ports.length).toBeGreaterThanOrEqual(2);
  });

  it('contains a ports property with Port objects', () => {
    expect(itinerary.ports[0]).toBeInstanceOf(Port);
  });
});