window.onload = function() {

  $('.modal').modal({backdrop: 'static', keyboard: false});
  $('.modal').modal('show');

  var currentGame;
  var canStart = true;



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
  var hopeSoloImageSource;
  var theKeeper = new Image(); 
  Keeper.prototype.drawKeeper = function() { 
    // scope thing, this function has its own scope so it needs to be called
    var keeperPosition = this;
    fieldctx.drawImage(theKeeper, keeperPosition.x, keeperPosition.y);
    theKeeper.src = hopeSoloImageSource
  }

// Make the keeper dive
  Keeper.prototype.dive = function(keyPressed) {
    var that = this;
    var start;

    function topLeft() {
      hopeSoloImageSource = "images/solo-topleft.png";
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
    }

    function topRight() {
      hopeSoloImageSource = "images/solo-topright.png";
      // imageX = 600;
      // imageY = 270;
      // imageWidth = 210;
      // imageHeight = 350;
      if (that.x !== 1000 && that.y !== 250) {
        that.x += 5;
        that.y -= 5;
      }
      if (that.x !== 1000) {
        that.x += 5;
      }
      if (that.y !==250) {
        that.y -= 5;
      }
      else {
        clearInterval(start);
      }
    }

    function bottomLeft() {
      hopeSoloImageSource = "images/solo-bottomleft.png";
      // imageX = 360;
      // imageY = 480;
      // imageWidth = 320;
      // imageHeight = 120;
      if (that.x !== 185 && that.y !== 500) {
        that.x -= 5;
        that.y += 1;
      }
      if (that.x !== 185) {
        that.x -= 5;
      }
      if (that.y !== 500) {
        that.y += 1;
      }
      else {
        clearInterval(start);
      }
    }
  
    function bottomRight() {
      hopeSoloImageSource = "images/solo-bottomright.png";
      // imageX = 600;
      // imageY = 480;
      // imageWidth = 320;
      // imageHeight = 120;
      if (that.x !== 700 && that.y !== 500) {
        that.x += 5;
        that.y += 3;
      }
      if (that.x !== 700) {
        that.x += 5;
      }
      if (that.y !== 500) {
        that.y += 3;
      }
      else {
        clearInterval(start);
      }
    }

  switch(keyPressed) {
    case 65:
      diveSelection;
      console.log(diveSelection);
      if (diveSelection === 1) {
        start = setInterval(topLeft, 7);
        document.getElementsByClassName('shot1')[0].style.backgroundColor="#ce1404";
        console.log("save");
      }
      if (diveSelection === 2) {
        start = setInterval(topRight, 7);
        document.getElementsByClassName('shot1')[0].style.backgroundColor="#2fad08";
        console.log("goal");
      }
      if (diveSelection === 3) {
        start = setInterval(bottomLeft, 7);
        document.getElementsByClassName('shot1')[0].style.backgroundColor="#2fad08";
        console.log("goal");
      }
      if (diveSelection === 4) {
        start = setInterval(bottomRight, 7);
        document.getElementsByClassName('shot1')[0].style.backgroundColor="#2fad08";
      }
      break;
    case 83:
      diveSelection;
      console.log(diveSelection);
      if (diveSelection === 1) {
        start = setInterval(topLeft, 7);
        document.getElementsByClassName('shot1')[0].style.backgroundColor="#2fad08";
        console.log("goal");
      }
      if (diveSelection === 2) {
        start = setInterval(topRight, 7);
        document.getElementsByClassName('shot1')[0].style.backgroundColor="#ce1404";
        console.log("save");
      }
      if (diveSelection === 3) {
        start = setInterval(bottomLeft, 7);
        document.getElementsByClassName('shot1')[0].style.backgroundColor="#2fad08";
        console.log("goal");
      }
      if (diveSelection === 4) {
        start = setInterval(bottomRight, 7);
        document.getElementsByClassName('shot1')[0].style.backgroundColor="#2fad08";
        console.log("goal");
      }
      break;
    case 90:
      diveSelection;
      console.log(diveSelection);
      if (diveSelection === 1) {
        start = setInterval(topLeft, 7);
        document.getElementsByClassName('shot1')[0].style.backgroundColor="#2fad08";
        console.log("goal");
      }
      if (diveSelection === 2) {
        start = setInterval(topRight, 7);
        document.getElementsByClassName('shot1')[0].style.backgroundColor="#2fad08";
        console.log("goal");
      }
      if (diveSelection === 3) {
        start = setInterval(bottomLeft, 7);
        document.getElementsByClassName('shot1')[0].style.backgroundColor="#ce1404";
        console.log("save");
      }
      if (diveSelection === 4) {
        start = setInterval(bottomRight, 7);
        document.getElementsByClassName('shot1')[0].style.backgroundColor="#2fad08";
        console.log("goal");
      }
      break;
    case 88:
      diveSelection;
      console.log(diveSelection);
      if (diveSelection === 1) {
        start = setInterval(topLeft, 7);
        document.getElementsByClassName('shot1')[0].style.backgroundColor="##2fad08";
        console.log("goal");
      }
      if (diveSelection === 2) {
        start = setInterval(topRight, 7);
        document.getElementsByClassName('shot1')[0].style.backgroundColor="#2fad08";
        console.log("goal");
      }
      if (diveSelection === 3) {
        start = setInterval(bottomLeft, 7);
        document.getElementsByClassName('shot1')[0].style.backgroundColor="#2fad08";
        console.log("goal");
      }
      if (diveSelection === 4) {
        start = setInterval(bottomRight, 7);
        document.getElementsByClassName('shot1')[0].style.backgroundColor="#ce1404";
        console.log("save");
      }
      break;
    default:
  }
}

// Randomize keeper dive position
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  console.log("random generator working");
}

var diveSelection = getRandomInt(1, 4);



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
    fieldctx.drawImage(theBall, ballPosition.x, ballPosition.y, ballPosition.width, ballPosition.height)
    theBall.src = "images/ball.png"
  }

// Shoot the ball
  Ball.prototype.shoot = function(keyPressed) {
    var that = this;
    var start;

    function topLeft() {
      if (that.x !== 185 && that.y !== 250) {
        that.x -= 5;
        that.y -= 5;
      }
      if (that.x !== 185) {
        that.x -= 5;
      }
      if (that.y !==250) {
        that.y -= 5;
      }
      else {
        clearInterval(start);
      }
    }

    function topRight() {
      if (that.x !== 1000 && that.y !== 250) {
        that.x += 5;
        that.y -= 5;
      }
      if (that.x !== 1000) {
        that.x += 5;
      }
      if (that.y !==250) {
        that.y -= 5;
      }
      else {
        clearInterval(start);
      }
    }

    function bottomLeft() {
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
    }
  
    function bottomRight() {
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
    }

  switch(keyPressed) {
    case 65:
      start = setInterval(topLeft, 1);
      break;
    case 83:
      start = setInterval(topRight, 1);
      break;
    case 90:
      start = setInterval(bottomLeft, 1);
      break;
    case 88:
      start = setInterval(bottomRight, 1);
      break;
    default:
  }
}



// Animate the ball and keeper
  function animateGame() {
    setInterval (function(){
      fieldctx.clearRect(0, 0, 1275, 735);
      currentGame.keeper.drawKeeper();
      currentGame.ball.drawBall();
    }, 50)
  }












// Canvas
  var fieldCanvas = document.getElementById('theField');
  var fieldctx = fieldCanvas.getContext('2d');
  fieldCanvas.style.width = window.innerWidth + "px";
  fieldCanvas.style.height = window.innerHeight + "px";
  


// Start game on click
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

// Start game function
  function startGame() {
    currentGame = new Game();
    var theBall = new Ball();
    currentGame.ball = theBall;
    var theKeeper = new Keeper();
    currentGame.keeper = theKeeper;
    hopeSoloImageSource = "images/solo-ready.png";
    animateGame();
  }

  document.onkeydown = function(event) {
    if (event.which === 65 || event.which === 83 || event.which === 90 || event.which === 88) {
    }
    var shotCode = event.which;
    currentGame.ball.shoot(shotCode);
    currentGame.keeper.dive(shotCode);
  }



// Prevent scrolling
  document.getElementById("theField").onwheel = function(event){
    event.preventDefault();
  };

  document.getElementById("theField").onmousewheel = function(event){
    event.preventDefault();
  };



} //close window.onload function














// Scoreboard
// function drawScoreboard() {
//   fieldctx.fillStyle="#333";
//   fieldctx.fillRect(490, 50, 300, 60);
// }

// var scoreOne = function() {
//   fieldctx.beginPath();
//   fieldctx.arc(530,80,20,0,2*Math.PI);
//   fieldctx.strokeStyle = "#777";
//   fieldctx.lineWidth= 3;
//   fieldctx.stroke();
// }

// var scoreTwo = function() {
//   fieldctx.beginPath();
//   fieldctx.arc(585,80,20,0,2*Math.PI);
//   fieldctx.strokeStyle = "#777";
//   fieldctx.lineWidth= 3;
//   fieldctx.stroke();
// }

// var scoreThree = function() {
//   fieldctx.beginPath();
//   fieldctx.arc(640,80,20,0,2*Math.PI);
//   fieldctx.strokeStyle = "#777";
//   fieldctx.lineWidth= 3;
//   fieldctx.stroke();
// }

// var scoreFour = function() {
//   fieldctx.beginPath();
//   fieldctx.arc(695,80,20,0,2*Math.PI);
//   fieldctx.strokeStyle = "#777";
//   fieldctx.lineWidth= 3;
//   fieldctx.stroke();
// }

// var scoreFive = function() {
//   fieldctx.beginPath();
//   fieldctx.arc(750,80,20,0,2*Math.PI);
//   fieldctx.strokeStyle = "#777";
//   fieldctx.lineWidth= 3;
//   fieldctx.stroke();
// }