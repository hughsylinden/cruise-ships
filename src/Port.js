const Itinerary = require('../src/Itinerary.js');
const Ship = require('../src/Ship.js');

function Port(name){
  this.name = name;
  this.ships = [];
}

Port.prototype.addShip = function(ship){
  if(ship instanceof Ship){
    this.ships.push(ship);
  }
}

Port.prototype.removeShip = function(shipToRemove){
  this.ships = this.ships.filter(ship => ship!==shipToRemove);
}

module.exports = Port;