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
    case 65: //top right
      diveSelection;
      console.log("randomdiveselection:", diveSelection);
      if (diveSelection === 1) {
        start = setInterval(topLeft, 1);
        attempt++;
        scoresArr.push("save");
        console.log("attempt", attempt);
        console.log("scoreArr", scoresArr);
        console.log("score", score);
      }
      if (diveSelection === 2) {
        start = setInterval(topRight, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
        console.log("attempt", attempt);
        console.log("scoreArr", scoresArr);
        console.log("score", score);
      }
      if (diveSelection === 3) {
        start = setInterval(bottomLeft, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
        console.log("attempt", attempt);
        console.log("scoreArr", scoresArr);
        console.log("score", score);
      }
      if (diveSelection === 4) {
        start = setInterval(bottomRight, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
        console.log("attempt", attempt);
        console.log("scoreArr", scoresArr);
        console.log("score", score);
      }
      break;
    
    case 83: //top right
      diveSelection;
      console.log(diveSelection);
      if (diveSelection === 1) {
        start = setInterval(topLeft, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
        console.log("goal");
        console.log(attempt);
        console.log(scoresArr);
      }
      if (diveSelection === 2) {
        start = setInterval(topRight, 1);
        attempt++;
        scoresArr.push("save");
        console.log("save");
        console.log(attempt);
        console.log(scoresArr);
      }
      if (diveSelection === 3) {
        start = setInterval(bottomLeft, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
        console.log("goal");
        console.log(attempt);
        console.log(scoresArr);
      }
      if (diveSelection === 4) {
        start = setInterval(bottomRight, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
        console.log("goal");
        console.log(attempt);
        console.log(scoresArr);
      }
      break;
    
    case 90: //bottom left
      diveSelection;
      console.log(diveSelection);
      if (diveSelection === 1) {
        start = setInterval(topLeft, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
        console.log("goal");
        console.log(attempt);
        console.log(scoresArr);
      }
      if (diveSelection === 2) {
        start = setInterval(topRight, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
        console.log("goal");
        console.log(attempt);
        console.log(scoresArr);
      }
      if (diveSelection === 3) {
        start = setInterval(bottomLeft, 1);
        attempt++;
        scoresArr.push("save");
        console.log("save");
        console.log(attempt);
        console.log(scoresArr);
      }
      if (diveSelection === 4) {
        start = setInterval(bottomRight, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
        console.log("goal");
        console.log(attempt);
        console.log(scoresArr);
      }
      break;
    
    case 88: //bottom right
      diveSelection;
      console.log(diveSelection);
      if (diveSelection === 1) {
        start = setInterval(topLeft, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
        console.log("goal");
        console.log(attempt);
        console.log(scoresArr);
      }
      if (diveSelection === 2) {
        start = setInterval(topRight, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
        console.log("goal");
        console.log(attempt);
        console.log(scoresArr);
      }
      if (diveSelection === 3) {
        start = setInterval(bottomLeft, 1);
        attempt++;
        score++;
        scoresArr.push("goal");
        console.log("goal");
        console.log(attempt);
        console.log(scoresArr);
      }
      if (diveSelection === 4) {
        start = setInterval(bottomRight, 1);
        attempt++;
        scoresArr.push("save");
        console.log("save");
        console.log(attempt);
        console.log(scoresArr);
      }
      break;
    default:
  }
  updateScore();
  newAttempt();
}

// Randomize keeper dive position
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var diveSelection = getRandomInt(1, 4);



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
  function newAttempt() {
    var newAttempt = setInterval (startGame, 3000);
  }

// Keep score
  function updateScore() {
    if(scoresArr.includes("save")) {
    for(var i = 0; i< scoresArr.length; i++){

      if (scoresArr.indexOf("save") === 0) {
        console.log("case 4 save")
            $(".shot5").each(function() {
              $(this).addClass("saved");
            });
            continue;
               } else if (scoresArr.indexOf("save") === 1) {
                console.log("case 3 save")
              $(".shot4").each(function() {
                $(this).addClass("saved");
              });
              continue;
          } else if (scoresArr.indexOf("save") === 2) {
            console.log("case 2 save")

            $(".shot3").each(function() {
              $(this).addClass("saved");
            });
            continue;
        } else if (scoresArr.indexOf("save") === 3) {
          console.log("case 1 save")

          $(".shot2").each(function() {
            $(this).addClass("saved");
          });
          continue;
      } else if (scoresArr.indexOf("save") === 4) {
        console.log("case 0 save")

        $(".shot1").each(function() {
          $(this).addClass("saved");
        });
        continue;
    }
  }
    } else {
      for(var i = 0; i< scoresArr.length; i++){

      if (scoresArr.indexOf("goal") === 0) {
              $(".shot5").each(function() {
                $(this).addClass("goal");
              });
              continue;
            } else if (scoresArr.indexOf("goal") === 1) {
                    $(".shot4").each(function() {
                      $(this).addClass("goal");
                    });
                    continue;
                  }else if (scoresArr.indexOf("goal") === 2) {
                    $(".shot3").each(function() {
                      $(this).addClass("goal");
                    });
                    continue;
                  }else if (scoresArr.indexOf("goal") === 3) {
                    $(".shot2").each(function() {
                      $(this).addClass("goal");
                    });
                    continue;
                  } else if (scoresArr.indexOf("goal") === 4) {
                    $(".shot1").each(function() {
                      $(this).addClass("goal");
                    });
                    continue;
                  }
                }
    }
    // switch(scoresArr.length) {
    //   case 1:
    //     if (scoresArr.indexOf("save") === 0) {
    //       $(".shot1").each(function() {
    //         $(this).addClass("saved");
    //       });
    //     }
    //     else if (scoresArr.indexOf("goal") === 0) {
    //       $(".shot1").each(function() {
    //         $(this).addClass("goal");
    //       });
    //     }
    //     break;
    //   case 2:
    //     if (scoresArr.indexOf("save") === 1) {
    //       $(".shot2").each(function() {
    //         $(this).addClass("saved");
    //       });
    //     }
    //     else if (scoresArr.indexOf("goal") === 1) {
    //       $(".shot2").each(function() {
    //         $(this).addClass("goal");
    //       });
    //     }
    //     break;
    //   case 3:
    //     if (scoresArr.indexOf("save") === 2) {
    //       $(".shot3").each(function() {
    //         $(this).addClass("saved");
    //       });
    //     }
    //     else if (scoresArr.indexOf("goal") === 2) {
    //       $(".shot3").each(function() {
    //         $(this).addClass("goal");
    //       });
    //     }
    //     break;
    //   case 4:
    //     if (scoresArr.indexOf("save") === 3) {
    //       $(".shot4").each(function() {
    //         $(this).addClass("saved");
    //       });
    //     }
    //     else if (scoresArr.indexOf("goal") === 3) {
    //       $(".shot4").each(function() {
    //         $(this).addClass("goal");
    //       });
    //     }
    //     break;
    //   case 5:
    //     if (scoresArr.indexOf("save") === 4) {
    //       $(".shot5").each(function() {
    //         $(this).addClass("saved");
    //       });
    //     }
    //     else if (scoresArr.indexOf("goal") === 4) {
    //       $(".shot5").each(function() {
    //         $(this).addClass("goal");
    //       });
    //     }
    //     default:
    //     console.log("adajhda");
    // }
  }

  function endGame() {
    if (scoresArr.length === 5 && score >= 3) {
      $("#game-board").each(function() {
        $(this).addClass("winScreen");
      })
      alert("You win!!!");
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
    // newAttempt();
    endGame();
    clearInterval(newAttempt);
  }

  document.onkeydown = function(event) {
    if (event.which === 65 || event.which === 83 || event.which === 90 || event.which === 88) {
    }
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