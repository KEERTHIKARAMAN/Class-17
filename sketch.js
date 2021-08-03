var box1;
var box2;

function setup() {
  createCanvas(600, 400);
  
  box1 = new Box(200,200,20,30);
  box2 = new Box(150,100,30,50);

}

function draw() {
  background(220);

  box1.show();
  box1.setwidth(100);

  box2.show();

}

