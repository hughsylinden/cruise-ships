(function exportShip() {
  function Ship(itinerary){
    this.itinerary = itinerary;
    this.previousPort = null;
    this.currentPort = itinerary.ports[0];
    this.currentPort.addShip(this);
  }

  Ship.prototype = {
    setSail: function(){
      this.previousPort = this.currentPort;
      this.currentPort = null;
      this.previousPort.removeShip(this);
    },
    dock: function(){
      const ports = this.itinerary.ports;
      this.currentPort = ports[ports.indexOf(this.previousPort)+1];
      this.currentPort.addShip(this);
    }
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Ship;
  } else {
    window.Ship = Ship;
  }
}());