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

let rows, cols, cellWidth, cellHeight, arrow;

let nextMoveX = 0;
let nextMoveY = 0;

let singleArrowUp,singleArrowRight,singleArrowLeft,singleArrowDown;
let doubleArrowUp,doubleArrowRight,doubleArrowLeft,doubleArrowDown;
let tripleArrowUp,tripleArrowRight,tripleArrowLeft,tripleArrowDown;
let quadArrowUp,quadArrowRight,quadArrowLeft,quadArrowDown;
let quintArrowUp,quintArrowRight,quintArrowLeft,quintArrowDown;
let easyButton, mediumButton, hardButton;
let bg;

let click;

let mode = "hard";

let firstMove = true;

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
  easyButton = loadImage("assets/easy.png");
  mediumButton = loadImage("assets/medium.png");
  hardButton = loadImage("assets/hard.png");
  bg = loadImage("assets/background.png");
  click = loadSound("assets/Click.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noTint();
  image(bg, 0, 0, width, height);
  rows = spaces.length;
  cols = spaces[0].length;
  if (windowWidth > windowHeight){
    cellWidth =  height/(cols + 2);
    cellHeight = height/(rows + 2);
  }
  else if (windowHeight > windowWidth){
    cellWidth = width/(cols + 2);
    cellHeight = width/(rows + 2);
  }
  translate(cellWidth,cellHeight);
  noFill();
  rect(0,0,cellWidth*rows, cellHeight*cols);
  displaySpaces();
  displayEasy();
  displayMedium();
  displayHard();
}

function windowResized() {
  if (windowWidth > windowHeight) {
    resizeCanvas(windowHeight, windowHeight);
  }
  else if (windowWidth < windowHeight) {
    resizeCanvas(windowWidth, windowWidth);
  }
  setup();
}

function displayHard(){
  image(hardButton, rows*cellWidth, height/4, cellWidth, cellHeight/2);
}
function displayMedium(){
  image(mediumButton, rows*cellWidth, height/4 + cellHeight, cellWidth, cellHeight/2);
}
function displayEasy(){
  image(easyButton, rows*cellWidth, height/4 + cellHeight*2, cellWidth, cellHeight/2);
}

function displaySpace(x,y){
  if (x >= 0 && x < rows && y >= 0 && y < cols){
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
        arrow = doubleArrowUp;
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
        arrow = quadArrowUp;
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
}


function displaySpaces(){
  for (let y = 0; y < rows; y++){
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
          arrow = doubleArrowUp;
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
          arrow = quadArrowUp;
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
  }
}

function mousePressed() {
  click.play();
  let x = (Math.floor(mouseX / cellWidth)) - 1;
  let y = (Math.floor(mouseY / cellHeight)) - 1;
  console.log(x,mouseX, y, mouseY);
  if (x <  rows && x >= 0 && y < cols && y >= 0){
    if (firstMove){
      firstMove = false;
      nextMoveX = x;
      nextMoveY = y;
    }
    if (x === nextMoveX && y === nextMoveY){
      if (theColor[y][x] === 0) {
        theColor[y][x] = 1;
      }
      nextStep(x,y);
    }
    displaySpace(x,y);
  }
  // hard button
  else if (mouseX >= rows*cellWidth + cellWidth && mouseX <= rows*cellWidth + (cellWidth*2) && mouseY >= height/4 + cellHeight && mouseY <= height/4 + cellHeight + (cellHeight/2)){
    mode = "hard";
    spaces = [[1,2,1,2,3,3],
              [2,1,2,2,1,2],
              [2,4,1,3,2,1],
              [2,1,3,2,2,1],
              [2,3,1,3,2,1],
              [5,3,1,1,4,2]];

    direction = [[2,3,2,2,3,3],
                [3,2,4,3,4,4],
                [1,2,2,4,4,1],
                [3,3,1,4,4,3],
                [2,1,3,4,1,4],
                [2,2,4,1,1,4]];

    theColor = [[0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0]];
    firstMove = true;
    setup();
  }
  // medium button
  else if (mouseX >= rows*cellWidth + cellWidth && mouseX <= rows*cellWidth + (cellWidth*2) && mouseY >= height/4 + cellHeight*2 && mouseY <= height/4 + cellHeight*2 + (cellHeight/2)){
    mode = "medium";
    spaces = [[3,1,1,2,4],
              [3,3,1,2,4],
              [1,2,2,2,2],
              [2,2,2,1,2],
              [2,1,4,3,1]];

    direction = [[3,4,2,3,3],
                [2,3,3,4,4],
                [2,1,2,3,1],
                [2,2,1,1,1],
                [1,2,1,4,1]];

    theColor = [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0]];
    firstMove = true;
    setup();
  }
  else if (mouseX >= rows*cellWidth + cellWidth && mouseX <= rows*cellWidth + (cellWidth*2) && mouseY >= height/4 + (cellHeight*3) && mouseY <= height/4 + (cellHeight*3) + (cellHeight/2)){
    spaces = [[1,3,2,1],
              [3,1,1,2],
              [2,2,2,1],
              [2,1,2,3]];

    direction = [[2,3,4,4],
                [2,3,3,4],
                [1,2,4,3],
                [1,2,4,1]];

    theColor = [[0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]];
    firstMove = true;
    setup();
  }
  console.log(nextMoveX, nextMoveY);
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