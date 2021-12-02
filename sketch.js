let g,b;
let shooting;
let notShooting;
function setup() {
  createCanvas(400, 400);
  g = new Gun(200,350,50,50);
  b = new Bottle(200,200,30,50);
  b.placeBottle();
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
 hitBottle();
}

function hitBottle(){
  if(mouseX > b.x &&
    mouseX < b.x + b.w &&
    mouseY > b.y &&
    mouseY < b.y + b.h){
    bottleImage = loadImage("crackedBottle.png");
    b.placeBottle();
  }
}//end hitBottle
