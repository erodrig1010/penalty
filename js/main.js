window.onload = function() {

  $('.modal').modal({backdrop: 'static', keyboard: false});
  $('.modal').modal('show');

  var myCanvas = document.getElementById('theCanvas');
  var ctx = myCanvas.getContext('2d');
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var Keeper = function(){
    this.x = 233;     
    this.y = 500;     
    this.width = 50;  
    this.height = 85; 
    this.img = '../images/solo_ready.png';  
  }

  function startGame() {

  }







} //close window.onload function