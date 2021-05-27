function Port(name){
  this.name = name;
  this.ships = [];
}

Port.prototype = {
  addShip: function(ship){
    this.ships.push(ship);    
  },
  removeShip: function(shipToRemove){
    this.ships = this.ships.filter(ship => ship!==shipToRemove);
  }
}

module.exports = Port;