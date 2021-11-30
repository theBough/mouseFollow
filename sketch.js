let g,b;
let shooting;
let notShooting;
function setup() {
  createCanvas(400, 400);
  g = new Gun(200,350,50,50);
  b = new Bottle(200,200,30,50);
  notShooting = true;
}

function draw() {
  background(220);
  g.display();
  g.update();
  b.display();
  
}
function mouseClicked(){
  if ( notShooting){
    notShooting = false;
     shooting = setInterval(g.shoot , 80);
  }
 
}
