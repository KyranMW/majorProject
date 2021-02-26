// arrow grid game
// Kyran Mcknight-Woods
// CompSci 30
// 2D Grid project
// inspiration from Lock Puzzle

// determines how many spaces between the clicked arrow and the next arrow
let spaces = 
 [[1,2,1,2,3,3],
   [2,1,2,2,1,2],
   [2,4,1,3,2,1],
   [2,1,3,2,2,1],
   [2,3,1,3,2,1],
   [5,3,1,1,4,2]];

// determines the direction the arrow should be facing
// 1 = up, 2 = right, 3 = down, 4 = left
let direction = 
 [[2,3,2,2,3,3],
   [3,2,4,3,4,4],
   [1,2,2,4,4,1],
   [3,3,1,4,4,3],
   [2,1,3,4,1,4],
   [2,2,4,1,1,4]];

// determines the color of the arrow
let theColor =
[[0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]];

let rows, cols, cellWidth, cellHeight, arrow, p;

let nextMoveX = 0;
let nextMoveY = 0;

let singleArrowUp,singleArrowRight,singleArrowLeft,singleArrowDown;
let doubleArrowUp,doubleArrowRight,doubleArrowLeft,doubleArrowDown;
let tripleArrowUp,tripleArrowRight,tripleArrowLeft,tripleArrowDown;
let quadArrowUp,quadArrowRight,quadArrowLeft,quadArrowDown;
let quintArrowUp,quintArrowRight,quintArrowLeft,quintArrowDown;

let click;

function preload() {
  singleArrowUp = loadImage("assets/1 space arrow up.png");
  singleArrowDown = loadImage("assets/1 space arrow down.png");
  singleArrowRight = loadImage("assets/1 space arrow right.png");
  singleArrowLeft = loadImage("assets/1 space arrow left.png");
  doubleArrowUp = loadImage("assets/2 space arrow up.png");
  doubleArrowRight = loadImage("assets/2 space arrow right.png");
  doubleArrowLeft = loadImage("assets/2 space arrow left.png");
  doubleArrowDown = loadImage("assets/2 space arrow down.png");
  tripleArrowUp = loadImage("assets/3 space arrow up.png");
  tripleArrowDown = loadImage("assets/3 space arrow down.png");
  tripleArrowRight = loadImage("assets/3 space arrow right.png");
  tripleArrowLeft = loadImage("assets/3 space arrow left.png");
  quadArrowUp = loadImage("assets/4 space arrow up.png");
  quadArrowDown = loadImage("assets/4 space arrow down.png");
  quadArrowRight = loadImage("assets/4 space arrow right.png");
  quadArrowLeft = loadImage("assets/4 space arrow left.png");
  quintArrowUp = loadImage("assets/5 space arrow up.png");
  quintArrowDown = loadImage("assets/5 space arrow down.png");
  quintArrowRight = loadImage("assets/5 space arrow right.png");
  quintArrowLeft = loadImage("assets/5 space arrow left.png");
  click = loadSound("assets/Click.wav");
}

function setup() {
  createCanvas(600, 600);
  rows = spaces.length;
  cols = spaces[0].length;
  cellWidth = width/cols;
  cellHeight = height/rows;
}

function draw() {
  background(220);
  displaySpaces();
}

function displaySpaces(){
  for (let y = 0; y < rows; y++){
    ml = millis();
    for (let x = 0; x < cols; x++){
      if (spaces[y][x] === 1){
        if (direction[y][x] === 1){
          arrow = singleArrowUp;
        }
        else if (direction[y][x] === 2){
          arrow = singleArrowRight;
        }
        else if (direction[y][x] === 3){
          arrow = singleArrowDown;
        }
        else if (direction[y][x] === 4){
          arrow = singleArrowLeft;
        }
      }
      else if (spaces[y][x] === 2){
        if (direction[y][x] === 1){
          arrow = doubleArrowUp
        }
        else if (direction[y][x] === 2){
          arrow = doubleArrowRight;
        }
        else if (direction[y][x] === 3){
          arrow = doubleArrowDown;
        }
        else if (direction[y][x] === 4){
          arrow = doubleArrowLeft;
        }
      }
      else if (spaces[y][x] === 3){
        if (direction[y][x] === 1){
          arrow = tripleArrowUp;
        }
        else if (direction[y][x] === 2){
          arrow = tripleArrowRight;
        }
        else if (direction[y][x] === 3){
          arrow = tripleArrowDown;
        }
        else if (direction[y][x] === 4){
          arrow = tripleArrowLeft;
        }
      }
      else if (spaces[y][x] === 4){
        if (direction[y][x] === 1){
          arrow = quadArrowUp
        }
        else if (direction[y][x] === 2){
          arrow = quadArrowRight;
        }
        else if (direction[y][x] === 3){
          arrow = quadArrowDown;
        }
        else if (direction[y][x] === 4){
          arrow = quadArrowLeft;
        }
      }
      else if (spaces[y][x] === 5){
        if (direction[y][x] === 1){
          arrow = quintArrowUp;
        }
        else if (direction[y][x] === 2){
          arrow = quintArrowRight;
        }
        else if (direction[y][x] === 3){
          arrow = quintArrowDown;
        }
        else if (direction[y][x] === 4){
          arrow = quintArrowLeft;
        }
      }
      if (theColor[y][x] === 0){
        tint("white");
      }
      else if (theColor[y][x] === 1){
        tint("red");
      }
      image(arrow, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
    console.log(millis()-ml);
  }
}

function mousePressed() {
  click.play();
  let x = Math.floor(mouseX / cellWidth);
  let y = Math.floor(mouseY / cellHeight);
  if (nextMoveX === 0 && nextMoveY === 0){
    nextMoveX = x;
    nextMoveY = y;
  }
  if (x === nextMoveX && y === nextMoveY){
    if (theColor[y][x] === 0) {
      theColor[y][x] = 1;
    }
    nextStep(x,y);
  }
}

// determines next move
function nextStep(x, y){
  if (direction[y][x] === 1){
    y -= spaces[y][x];
  }
  else if (direction[y][x] === 2){
    x += spaces[y][x];
  }
  else if (direction[y][x] === 3){
    y += spaces[y][x];
  }
  else if (direction[y][x] === 4){
    x -= spaces[y][x];
  }
  nextMoveX = x;
  nextMoveY = y;
}