
function Ship(startingPort){
  this.startingPort = startingPort;
  this.currentPort = startingPort;
}

Ship.prototype.setSail = function(){
  this.startingPort = null;
}

Ship.prototype.dock = function(port){
  this.startingPort = null;
  this.currentPort = port;
}

module.exports = Ship