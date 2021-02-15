// 2048
// Kyran Mcknight-Woods
// February 2nd, 2021

let rows;
let cols;
let cellWidth;
let cellHeight;
let gridPattern, rightArrow, downArrow, leftArrow, upArrow, n2;
let nums = [];
let newY = 0;

function preload(){
  gridPattern = loadImage("assets/grid pattern.png");
  rightArrow = loadImage("assets/right arrow.png");
  leftArrow = loadImage("assets/left arrow.png");
  upArrow = loadImage("assets/up arrow.png");
  downArrow = loadImage("assets/down arrow.png");
  n2 = loadImage("assets/2.png");
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
  for (let i = 0; i <= nums.length - 1; i++) {
    nums[i].display();
  }
}

class num {
  constructor(cellHeight, cellWidth){
    this.pic = n2;
    this.x = Math.floor(random(0,3.9)) * cellWidth;
    this.y = Math.floor(random(0,3.9))* cellHeight;
    this.dx = 0.5;
    this.dy = 0.5;
    this.width = cellWidth;
    this.height = cellHeight;
  }
  display(){
    image(this.pic, this.x, this.y, this.width, this.height);
  }
  moveUp(){
    if (nums.length > 1){ 
      for (let i = 0; i <= nums.length - 1; i++){
        for (let j = 0; j <= nums.length -1; j++){
          if (nums[i].x === nums[j].x){
            if (nums[i].y > nums[j].y){
              newY += 50;
            }
          }
          nums[i].y = newY;
        }
      }
    }
    else {
      nums[0].y = 0;
    }
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

function keyPressed(){
  if (keyCode === 38){
    n2 = new num(cellHeight, cellWidth);
    nums.push(n2)
    n2.moveUp();
  }
}