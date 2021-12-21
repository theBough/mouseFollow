let g;
let b = [];
let d = [];
let shooting;
let notShooting;

function setup() {
  createCanvas(400, 400);
  g = new Gun(200,350,50,50);
  for(var i =0 ; i < 5 ; i++){
    b.push(new Bottle(50 + i*55,200,30,50)); 
  }//end loop
  for( i =0 ; i < 5 ; i++){
    d.push(new Duck(50 + i*55,100,30,50)); 
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
  for( i =0 ; i <d.length ; i++){
    d[i].display();
  }
  for( i =0 ; i <d.length ; i++){
    d[i].update();
  }
  
}
function mouseClicked(){
  if ( notShooting){
    notShooting = false;
     shooting = setInterval(g.shoot , 80);
  }
 hitBottle();
  hitDuck();
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
function hitDuck(){
  for(var i =0 ; i < d.length ; i++){
    if(mouseX > d[i].x &&
    mouseX < d[i].x + d[i].w &&
    mouseY > d[i].y &&
    mouseY < d[i].y + d[i].h){
    d[i].duckImage = loadImage("duckHit.png");
    
    }//end if
  } //end for loop
  
}//end hitDuck
