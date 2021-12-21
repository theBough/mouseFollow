let g;
let b = [];
let shooting;
let notShooting;

function setup() {
  createCanvas(400, 400);
  g = new Gun(200,350,50,50);
  for(var i =0 ; i < 5 ; i++){
    b.push(new Bottle(50 + i*55,200,30,50)); 
  }//end loop
  
  notShooting = true;
  rect(0, 300, width, 20 );
}

function draw() {
  background(220);
  let c = color(210,105,30)
  fill(c)
  rect(0, 230, width, 20 );
  c = color(0, 150, 255);
  fill(c);
  rect (0,130,width, 20);
  g.display();
  g.update();
  for(var i =0 ; i <b.length ; i++){
    b[i].display();
  }
  
  
}
function mouseClicked(){
  if ( notShooting){
    notShooting = false;
     shooting = setInterval(g.shoot , 80);
  }
 hitBottle();
}

function hitBottle(){
  for(var i =0 ; i < b.length ; i++){
    if(mouseX > b[i].x &&
    mouseX < b[i].x + b[i].w &&
    mouseY > b[i].y &&
    mouseY < b[i].y + b[i].h){
    b[i].bottleImage = loadImage("crackedBottle.png");
    
  }
  } 
  
}//end hitBottle
