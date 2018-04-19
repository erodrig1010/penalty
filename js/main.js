window.onload = function() {

////////////////////////////////////////////
///// - - - - -    Global    - - - - - /////
////////////////////////////////////////////

  $('.modal').modal({backdrop: 'static', keyboard: false});
  $('.modal').modal('show');

  var currentGame;
  var scoresArr = [];
  var attempt = 0;
  var score = 0;


////////////////////////////////////////////
///// - - - -    The keeper    - - - - /////
////////////////////////////////////////////

// The keeper
  var Keeper = function(){
    this.x = 590;     
    this.y = 410;     
    this.width = 89;  
    this.height = 190; 
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
    case 65: //top left
      diveSelection;
      console.log("top left " + diveSelection);
      if (diveSelection === 1) {
        start = setInterval(topLeft, 1);
        attempt++;
        scoresArr.push("save");
      }
      if (diveSelection === 2) {
        start = setInterval(topRight, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
      }
      if (diveSelection === 3) {
        start = setInterval(bottomLeft, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
      }
      if (diveSelection === 4) {
        start = setInterval(bottomRight, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
      }
      break;
    
    case 83: //top right
      diveSelection;
      console.log("top right " + diveSelection);
      if (diveSelection === 1) {
        start = setInterval(topLeft, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
      }
      if (diveSelection === 2) {
        start = setInterval(topRight, 1);
        attempt++;
        scoresArr.push("save");
      }
      if (diveSelection === 3) {
        start = setInterval(bottomLeft, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
      }
      if (diveSelection === 4) {
        start = setInterval(bottomRight, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
      }
      break;
    
    case 90: //bottom left
      diveSelection;
      console.log("bottom left " + diveSelection);
      if (diveSelection === 1) {
        start = setInterval(topLeft, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
      }
      if (diveSelection === 2) {
        start = setInterval(topRight, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
      }
      if (diveSelection === 3) {
        start = setInterval(bottomLeft, 1);
        attempt++;
        scoresArr.push("save");
      }
      if (diveSelection === 4) {
        start = setInterval(bottomRight, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
      }
      break;
    
    case 88: //bottom right
      diveSelection;
      console.log("bottom right " + diveSelection);
      if (diveSelection === 1) {
        start = setInterval(topLeft, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
      }
      if (diveSelection === 2) {
        start = setInterval(topRight, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
      }
      if (diveSelection === 3) {
        start = setInterval(bottomLeft, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
      }
      if (diveSelection === 4) {
        start = setInterval(bottomRight, 1);
        attempt++;
        scoresArr.push("save");
      }
      break;
    default:
  }
  
  updateScore();
  // newAttempt();
  endGame();
}

// Randomize keeper dive position
function getRandomInt() {
  // return Math.floor(Math.random() * (max - min + 1) + min);
  // return min = 1
  // return max = Math.floor(Math.random() * 4);
  var numArray = [1, 2, 3, 4];
  return numArray[Math.floor(Math.random() * numArray.length)];
}
var diveSelection;

console.log(diveSelection);

////////////////////////////////////////////
///// - - - - -   The ball   - - - - - /////
////////////////////////////////////////////
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
      start = setInterval(topLeft, 10);
      break;
      case 83:
      start = setInterval(topRight, 10);
      break;
      case 90:
      start = setInterval(bottomLeft, 10);
      break;
      case 88:
      start = setInterval(bottomRight, 10);
      break;
      default:
  }
}



////////////////////////////////////////////
///// - - - - -  Animation   - - - - - /////
////////////////////////////////////////////

// Animate the ball and keeper
  function animateGame() {
      setInterval (function(){
      fieldctx.clearRect(0, 0, 1275, 735);
      currentGame.keeper.drawKeeper();
      currentGame.ball.drawBall();
    }, 50)
  }

// New attempt reset function
  // function newAttempt() {
  //   // var newAttempt = setInterval (startGame, 3000);
  //   // startGame()
    
  //   // endGame()
  // }

// Keep score
  function updateScore() {
    var scoreBoardDivs = $('.scoreboard div');
    scoresArr.forEach(function(eachScore, index) {
      if(eachScore === "goal") {
        scoreBoardDivs.eq(index).addClass("goal");
      } else if (eachScore === "save") {
        scoreBoardDivs.eq(index).addClass("saved");
      }
    })
  }

  function endGame() {
    event.preventDefault();
    if (scoresArr.length === 5 && score >= 3) {
      // fieldctx.clearRect(0, 0, 1275, 735);
      // $(".game-board").addClass("winScreen");
      // console.log($(".game-board"));
      setTimeout(function () {

        alert("You win!!!");

      }, 500)
      setTimeout(function () {
        // startGame();
        location.reload();
      },801)
    } else if(scoresArr.length === 5 && score < 3) {
      setTimeout(function () {

        alert("Le who, se her!!!!")

      }, 500)
      setTimeout(function () {
        // startGame();
        location.reload();
      },801)
    } else {
      setTimeout(function () {
        var theBall = new Ball();
        currentGame.ball = theBall;
        var theKeeper = new Keeper();
        currentGame.keeper = theKeeper;
        hopeSoloImageSource = "images/solo-ready.png";
      }, 800)
    }
  }



////////////////////////////////////////////
///// - - - - -    Canvas    - - - - - /////
////////////////////////////////////////////

// Canvas
  var fieldCanvas = document.getElementById('theField');
  var fieldctx = fieldCanvas.getContext('2d');
  fieldCanvas.style.width = window.innerWidth + "px";
  fieldCanvas.style.height = window.innerHeight + "px";
  


////////////////////////////////////////////
///// - - - -  Game functions  - - - - /////
////////////////////////////////////////////

// Game function
var Game = function() {
  this.keeper = {};
  this.ball = {};
}

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
    endGame();
    // clearInterval(newAttempt);
  }

  document.onkeydown = function(event) {
    if (event.which === 65 || event.which === 83 || event.which === 90 || event.which === 88) {
      event.preventDefault();
    }
    diveSelection = getRandomInt();
    var shotCode = event.which;
    currentGame.ball.shoot(shotCode);
    currentGame.keeper.dive(shotCode);
  }



////////////////////////////////////////////
///// - - - - -   Styling    - - - - - /////
////////////////////////////////////////////

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