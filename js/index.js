const canvas = document.querySelector("canvas");
canvas.style.border = "solid 2px black";
const ctx = canvas.getContext("2d");

const startScreen = document.querySelector(".game-intro");


//car variables
let carWidth = 55;
let carHeight = 140;
let carX = 200;
let carY = 200;
const carSpeedValue = 5;

//obstacle 1 variables
let obstacle1Width = 300;
let obstacle1Height = 30;
let obstacle1X = 0;
let obstacle1Y = 10;

const backgrounImg = new Image()
backgrounImg.src = "../images/road.png"
const carImage = new Image()
carImage.src = "../images/car.png"

let isCarGoingLeft = false;
let isCarGoingRight = false;

window.onload = () => {
  // hide the canvas until we press start button
  canvas.style.display = "none"

  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function carMove() {
    if (isCarGoingLeft) {
      if (carX > 0) {
        carX -= carSpeedValue;
      }
    } else if (isCarGoingRight) {
      if (carX < canvas.width - carWidth) {
        carX += carSpeedValue;
      }
    }
  }

  /*function drawObstacle1() {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(obstacle1X, obstacle1Y, obstacle1Width, obstacle1Height);
    ctx.closePath();
  }*/

  let animationFrameId;

  function startGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log("start game");
    startScreen.style.display = "none"
    canvas.style.display = "block"
    ctx.drawImage(backgrounImg, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(carImage, carX, carY, carWidth, carHeight)
    carMove()
    
    animationFrameId = requestAnimationFrame(startGame);

    document.addEventListener("keydown", event => {
      if (event.code === "ArrowLeft") {
        isCarGoingLeft = true;
        console.log("moving left")
      }
      if (event.code === "ArrowRight") {
        isCarGoingRight = true;
        console.log("moving right")
      }
    });

      document.addEventListener("keyup", event => {
        isCarGoingLeft = false;
        isCarGoingRight = false;
        console.log("stop movement")
      });
  }
};
