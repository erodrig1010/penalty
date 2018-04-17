window.onload = function() {

  $('.modal').modal({backdrop: 'static', keyboard: false});
  $('.modal').modal('show');

  var currentGame;
  var canStart = true;


// Scoreboard
  function drawScoreboard() {
    ctx.fillStyle="#333";
    ctx.fillRect(490, 50, 300, 60);
  }

  var scoreOne = function() {
    ctx.beginPath();
    ctx.arc(530,80,20,0,2*Math.PI);
    ctx.strokeStyle = "#777";
    ctx.lineWidth= 3;
    ctx.stroke();
  }

  var scoreTwo = function() {
    ctx.beginPath();
    ctx.arc(585,80,20,0,2*Math.PI);
    ctx.strokeStyle = "#777";
    ctx.lineWidth= 3;
    ctx.stroke();
  }

  var scoreThree = function() {
    ctx.beginPath();
    ctx.arc(640,80,20,0,2*Math.PI);
    ctx.strokeStyle = "#777";
    ctx.lineWidth= 3;
    ctx.stroke();
  }

  var scoreFour = function() {
    ctx.beginPath();
    ctx.arc(695,80,20,0,2*Math.PI);
    ctx.strokeStyle = "#777";
    ctx.lineWidth= 3;
    ctx.stroke();
  }

  var scoreFive = function() {
    ctx.beginPath();
    ctx.arc(750,80,20,0,2*Math.PI);
    ctx.strokeStyle = "#777";
    ctx.lineWidth= 3;
    ctx.stroke();
  }


// The keeper
  var Keeper = function(){
    this.x = 590;     
    this.y = 410;     
    this.width = 89;  
    this.height = 190; 
    this.img = "images/solo-ready.png"; 
  }

  Keeper.prototype.drawKeeper = function(){ 
    var theKeeper = new Image(); 
    // scope thing, this function has its own scope so it needs to be called
    var keeperPosition = this;
    theKeeper.onload = function() { 
      // console.log('up:', theKeeper, keeperPosition.x, keeperPosition.y, keeperPosition.width, keeperPosition.height);
      ctx.drawImage(theKeeper, keeperPosition.x, keeperPosition.y, keeperPosition.width, keeperPosition.height)
  };
    theKeeper.src = "images/solo-ready.png"
  }


// The ball
  var Ball = function(){
    this.x = 595;     
    this.y = 660;     
    this.width = 80;  
    this.height = 80; 
    this.img = "images/ball.png"; 
  }

  Ball.prototype.drawBall = function(){ 
    var theBall = new Image(); 
    var ballPosition = this; 
    theBall.onload = function() { 
      console.log('up:', theBall, this.x, this.y, this.width, this.height);
      ctx.drawImage(theBall, ballPosition.x, ballPosition.y, ballPosition.width, ballPosition.height)
  };
    theBall.src = "images/ball.png"
  }


// Shoot the ball
  Ball.prototype.shoot = function(keyPressed) {
  ctx.clearRect(this.x, this.y, this.width, this.height)
  switch(keyPressed) {
    case 65:
      this.x = 185;
      this.y = 235;
      break;
    case 83:
      this.x = 1000;
      this.y = 235;
      break;
    case 90:
      this.x = 185;
      this.y = 500;
      break;
    case 88:
      this.x = 1010;
      this.y = 500;
      break;
    default:
  }
    this.drawBall();
}


// Canvas
  var myCanvas = document.getElementById('theCanvas');
  var ctx = myCanvas.getContext('2d');
  myCanvas.style.width = window.innerWidth + "px";
  myCanvas.style.height = window.innerHeight + "px";
  

// Start game on click
  document.getElementById("start-button").onclick = function() {
    startGame();
  };


// Start game function
  function startGame() {
    currentGame = new Game();
    var theKeeper = new Keeper();
    currentGame.keeper = theKeeper;
    currentGame.keeper.drawKeeper();
    var theBall = new Ball();
    currentGame.ball = theBall;
    currentGame.ball.drawBall();
    drawScoreboard();
    scoreOne();
    scoreTwo();
    scoreThree();
    scoreFour();
    scoreFive();
    currentGame.ball.shoot();
  }

  document.onkeydown = function(event) {
    if (event.which === 65 || event.which === 83 || event.which === 90 || event.which === 88) {
    }
    var shotCode = event.which;
    currentGame.ball.shoot(shotCode);
  }


// Prevent scrolling
  document.getElementById("theCanvas").onwheel = function(event){
    event.preventDefault();
  };

  document.getElementById("theCanvas").onmousewheel = function(event){
    event.preventDefault();
  };



} //close window.onload function