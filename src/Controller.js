
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
  }
}