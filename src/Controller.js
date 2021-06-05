
function Controller() {
  this.initialiseSea();
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
  }
}