let bottleImage;

function Bottle(x,y,w,h){
  
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  bottleImage = loadImage("bottle.png");
  
  this.display = function(){
    image(bottleImage,this.x, this.y, this.w, this.h);
  }//end display
  this.placeBottle = function(){
    this.x = random(width - this.w);
    this.y = random(height - this.h);
  }//end place Bottle
}//end Gun
