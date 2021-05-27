const Itinerary = require('../src/Itinerary.js');

describe('Itinerary', () => {
  const glasgow = jest.fn();
  const manchester = jest.fn()
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
});