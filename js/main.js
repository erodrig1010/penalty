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
    this.ready = "images/solo-ready.png"; 
    this.topLeft = "/images/solo-topleft.png";
    this.topRight = "/images/solo-topright.png";
    this.bottomLeft = "/images/solo-bottomleft.png";
    this.bottomRight = "/images/solo-bottomright.png";
  }

// Draw the keeper
  var theKeeper = new Image(); 
  
  Keeper.prototype.drawKeeper = function(imageSource){ 
    // scope thing, this function has its own scope so it needs to be called
    var keeperPosition = this;
    theKeeper.onload = function() { 
      ctx.drawImage(theKeeper, keeperPosition.x, keeperPosition.y);
    };
    theKeeper.src = imageSource
  }

// Make the keeper dive
  Keeper.prototype.dive = function(keyPressed) {
    var that = this;
    var start;


    function topLeft() {
      imageSource = "images/solo-topleft.png";
      ctx.clearRect(that.x, that.y, that.width, that.height);
      // imageX = 450;
      // imageY = 270;
      // imageWidth = 210;
      // imageHeight = 350;
      if (that.x !== 185 && that.y !== 250) {
        that.x -=5;
        that.y -=3;
      }
      if (that.x !== 185) {
        that.x -= 5;
      }
      if (that.y !==250) {
          that.y -= 1;
      }
      else {
        clearInterval(start);
      }
      that.drawKeeper(imageSource);
      console.log(that.x, that.y);
    }

    function topRight() {
      ctx.clearRect(that.x, that.y, that.width, that.height);
      imageSource = "images/solo-topright.png";
      // imageX = 600;
      // imageY = 270;
      // imageWidth = 210;
      // imageHeight = 350;
      if (that.x !== 1000) {
        that.x += 5;
      }
      if (that.y !==250) {
        that.y -= 5;
      }
      else {
        clearInterval(start);
      }
      that.drawKeeper(imageSource);
    }

    function bottomLeft() {
      imageSource = "images/solo-bottomleft.png";
      ctx.clearRect(that.x, that.y, that.width, that.height);
      // imageX = 360;
      // imageY = 480;
      // imageWidth = 320;
      // imageHeight = 120;
      if (that.x !== 185 && that.y !== 500) {
        that.x -= 5;
        that.y -= 3;
      }
      if (that.x !== 185) {
        that.x -= 5;
      }
      if (that.y !== 500) {
        that.y -= 1;
      }
      else {
        clearInterval(start);
      }
      that.drawKeeper(imageSource);
    }
  
    function bottomRight() {
      imageSource = "images/solo-bottomright.png";
      ctx.clearRect(that.x, that.y, that.width, that.height);
      // imageX = 600;
      // imageY = 480;
      // imageWidth = 320;
      // imageHeight = 120;
      if (that.x !== 1010 && that.y !== 500) {
        that.x += 5;
        that.y -= 3;
      }
      if (that.x !== 1010) {
        that.x += 5;
      }
      if (that.y !== 500) {
        that.y -= 1;
      }
      else {
        clearInterval(start);
      }
      that.drawKeeper(imageSource);
    }

  switch(keyPressed) {
    case 65:
      start = setInterval(topLeft, 7);
      break;
    case 83:
      start = setInterval(topRight, 7);
      break;
    case 90:
      start = setInterval(bottomLeft, 7);
      break;
    case 88:
      start = setInterval(bottomRight, 7);
      break;
    default:
  }
    // this.drawKeeper(imageSource, width, height);
}

// Randomize keeper dive position
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// var diveSelection = getRandomInt(1, 4);












// The ball
  var Ball = function(){
    this.x = 595;     
    this.y = 660;     
    this.width = 80;  
    this.height = 80; 
    this.img = "images/ball.png"; 
  }

// Draw the ball
  var theBall = new Image(); 
  
  Ball.prototype.drawBall = function(){ 
    var ballPosition = this; 
    theBall.onload = function() { 
      ctx.drawImage(theBall, ballPosition.x, ballPosition.y, ballPosition.width, ballPosition.height)
    };
    theBall.src = "images/ball.png"
  }

// Shoot the ball
  Ball.prototype.shoot = function(keyPressed) {
    var that = this;
    var start;

    function topLeft() {
      ctx.clearRect(that.x, that.y, that.width, that.height);
      if (that.x !== 185) {
        that.x -= 5;
      }
      if (that.y !==250) {
        that.y -= 5;
      }
      else {
        clearInterval(start);
      }
      that.drawBall();
    }

    function topRight() {
      ctx.clearRect(that.x, that.y, that.width, that.height);
      if (that.x !== 1000) {
        that.x += 5;
      }
      if (that.y !==250) {
        that.y -= 5;
      }
      else {
        clearInterval(start);
      }
      that.drawBall();
    }

    function bottomLeft() {
      ctx.clearRect(that.x, that.y, that.width, that.height);
      if (that.x !== 185 && that.y !== 500) {
        that.x -= 5;
        that.y -= 3;
      }
      if (that.x !== 185) {
        that.x -= 5;
      }
      if (that.y !== 500) {
        that.y -= 1;
      }
      else {
        clearInterval(start);
      }
      that.drawBall();
    }
  
    function bottomRight() {
      ctx.clearRect(that.x, that.y, that.width, that.height);
      if (that.x !== 1010 && that.y !== 500) {
        that.x += 5;
        that.y -= 3;
      }
      if (that.x !== 1010) {
        that.x += 5;
      }
      if (that.y !== 500) {
        that.y -= 1;
      }
      else {
        clearInterval(start);
      }
      that.drawBall();
    }

  switch(keyPressed) {
    case 65:
      start = setInterval(topLeft, 7);
      break;
    case 83:
      start = setInterval(topRight, 7);
      break;
    case 90:
      start = setInterval(bottomLeft, 7);
      break;
    case 88:
      start = setInterval(bottomRight, 7);
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
    currentGame.keeper.drawKeeper("images/solo-ready.png");
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
    currentGame.keeper.dive();
  }

  document.onkeydown = function(event) {
    if (event.which === 65 || event.which === 83 || event.which === 90 || event.which === 88) {
    }
    var shotCode = event.which;
    currentGame.ball.shoot(shotCode);
    currentGame.keeper.dive(shotCode);
  }


// Prevent scrolling
  document.getElementById("theCanvas").onwheel = function(event){
    event.preventDefault();
  };

  document.getElementById("theCanvas").onmousewheel = function(event){
    event.preventDefault();
  };



} //close window.onload function