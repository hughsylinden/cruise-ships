const Port = require('../src/Port.js')

let port;
describe('Port', () => {
  beforeAll(()=>{
    port = new Port('Glasgow');
  })
  it('creates a port object', () => {
    expect(port).toBeInstanceOf(Port);
  })
  it('creates a port object with a name', () => {
    expect(port.name).toEqual('Glasgow');
  })
})