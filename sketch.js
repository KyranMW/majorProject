// 2048
// Kyran Mcknight-Woods
// February 2nd, 2021

let rows;
let cols;
let cellWidth;
let cellHeight;
let gridPattern, rightArrow, downArrow, leftArrow, upArrow;

function preload(){
  gridPattern = loadImage("assets/grid pattern.png");
  rightArrow = loadImage("assets/right arrow.png");
  leftArrow = loadImage("assets/left arrow.png");
  upArrow = loadImage("assets/up arrow.png");
  downArrow = loadImage("assets/down arrow.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  rows = 4;
  cols = 4;
  cellWidth = 50;
  cellHeight = 50;
}

function draw() {
  background(220);
  translate(width/2 - 100, height/2 - 100);
  rect(-1,0,201,201);
  drawGrid(cols, rows);
  drawArrows();
}

class num {
  constructor(){
    this.x = random(0,3) * cellWidth;
    this.y = random(0,3) * cellHeight;
    this.dx = 0.5;
    this.dy = 0.5;
    this.width = cellWidth;
    this.height = cellHeight;
  }
}

function drawGrid(cols, rows){
  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      image(gridPattern, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function drawArrows(){
  image(upArrow, 75, 210, cellWidth, cellHeight);
  image(downArrow, 75, 260, cellWidth, cellHeight);
  image(rightArrow, 125, 260, cellWidth, cellHeight);
  image(leftArrow, 25, 260, cellWidth, cellHeight);
}