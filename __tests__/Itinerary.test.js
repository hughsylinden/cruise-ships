const Itinerary = require('../src/Itinerary.js');

describe('Itinerary', () => {
  const ports = [jest.fn(),jest.fn()];
  const itinerary = new Itinerary(ports);
  it('creates a new Itinerary object', () => {
    expect(itinerary).toBeInstanceOf(Itinerary);
  });

  it('contains a ports property when instanciated', () => {
    expect(itinerary.ports).toEqual(ports);
  });

  it('contains a ports property with two ports', () => {
    expect(itinerary.ports.length).toEqual(2);
  });
});