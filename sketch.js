let g,b;
let shooting;
let notShooting;

function setup() {
  createCanvas(400, 400);
  g = new Gun(200,350,50,50);
  b = new Bottle(200,200,30,50);
  notShooting = true;
  rect(0, 300, width, 20 );
}

function draw() {
  background(220);
  let c = color(210,105,30)
  fill(c)
  rect(0, 250, width, 20 );
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
    
  }
}//end hitBottle
