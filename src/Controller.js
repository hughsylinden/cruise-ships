
function Controller(ship) {
  this.ship = ship
  this.initialiseSea();
  const button = document.getElementById('sailButton');
  button.addEventListener('click', () =>{
    this.setSail();
  })
}

Controller.prototype = {

  initialiseSea: function(){
    window.setInterval(changeBackground, 1000, 'images/water0.png', 'images/water1.png');
    let c = 0;
    const backgroundImage = document.getElementById('viewport')
    function changeBackground(a, b){
      backgroundImage.style.backgroundImage = c%2===0 ? `url(${b})` : `url(${a})`;      
      c++;
    }
  },
  renderPorts: function(ports){
    const portsElement = document.querySelector('#ports')
    portsElement.style.width = '0px';
    ports.forEach( (port,index) => {
      const portDiv = document.createElement('div');
      portDiv.className = 'port';
      portDiv.dataset.portName = port.name;
      portDiv.dataset.portIndex = index;      
      portsElement.appendChild(portDiv);      
      const width = parseInt(portsElement.style.width.slice(0,-2))+256;
      portsElement.style.width = width+'px';
    })
  },
  renderShip: function(){ 
    const index = this.ship.itinerary.ports.indexOf(this.ship.currentPort);
    const port = document.querySelector(`.port[data-port-index='${index}']`);  
    const shipToRender = document.getElementById('ship');    
    shipToRender.style.top = port.offsetTop+32+"px"; 
    shipToRender.style.left = port.offsetLeft-32+"px";
  },
  setSail: function(){ 
    const index = this.ship.itinerary.ports.indexOf(this.ship.currentPort);
    if (index==this.ship.itinerary.ports.length-1) {
      alert("reached the end of the line!")
      return
    }

    const nextPort = document.querySelector(`.port[data-port-index='${index+1}']`);
    this.ship.setSail();
    this.ship.dock();     
    const interval = setInterval(moveShip, 1);
    const shipToRender = document.getElementById('ship');     
    let c = shipToRender.offsetLeft
    function moveShip() {
      shipToRender.style.left = c+"px";
      c++;
      if(c===nextPort.offsetLeft-32){
        window.clearInterval(interval);
      }
    }
  }
}