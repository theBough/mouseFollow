let g;
function setup() {
  createCanvas(400, 400);
  g = new Gun(200,200,25,50);
}

function draw() {
  background(220);
  g.display();
}
