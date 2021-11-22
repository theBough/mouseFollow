let g;
function setup() {
  createCanvas(400, 400);
  g = new Gun(200,350,25,50);
}

function draw() {
  background(220);
  g.display();
  g.update();
}
