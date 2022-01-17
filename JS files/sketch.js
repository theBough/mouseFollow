let g;
let b = [];
//be will be an array for bullseyes
let be = [];
let d = [];
let shooting;
let notShooting;
let wave, waveTwo;
let bullets = [];

function setup() {
  createCanvas(400, 400);
  g = new Gun(200,350,50,50);
  for(var i =0 ; i < 5 ; i++){
    b.push(new Bottle(50 + i*55,200,30,50)); 
  }//end loop
  for( i =0 ; i < 5 ; i++){
    d.push(new Duck(50 + i*55,100,30,50)); 
  }//end loop
  for( i =0 ; i < 5 ; i++){
    be.push(new Bullseye(50 + i*55,25,25,25)); 
  }//end loop
  
  notShooting = true;
  rect(0, 300, width, 20 );
  wave = new Waves(0,110,410,40);
  waveTwo = new Waves(400,110,410,40);
}

function draw() {
  background(220);
  let c = color(210,105,30)
  fill(c)
  rect(0, 230, width, 20 );
  
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
  for( i =0 ; i <be.length ; i++){
    be[i].display();
  }
  wave.display();
  wave.update();
  waveTwo.display();
  waveTwo.update();
  for(i =0 ; i < bullets.length ; i ++){
    bullets[i].display();
  }//end for loop
}
function mouseClicked(){
  if ( notShooting){
    notShooting = false;
     shooting = setInterval(g.shoot , 80);
  }
  hitBottle();
  hitDuck();
  if(!hitDuck() && !hitBottle())  {
    bullets.push(new BulletHole(mouseX, mouseY, 20,20))  
  }
  
}

function hitBottle(){
  for(var i =0 ; i < b.length ; i++){
    if(mouseX > b[i].x &&
    mouseX < b[i].x + b[i].w &&
    mouseY > b[i].y &&
    mouseY < b[i].y + b[i].h){
    b[i].bottleImage = loadImage("crackedBottle.png");
    return true;
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
    return true;
    }//end if
  } //end for loop
  
}//end hitDuck
