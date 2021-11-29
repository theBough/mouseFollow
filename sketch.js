let g;
let shooting;
function setup() {
  createCanvas(400, 400);
  g = new Gun(200,350,50,50);
}

function draw() {
  background(220);
  g.display();
  g.update();
  
}
function mouseClicked(){
  shooting = setInterval(g.shoot , 80);
}
