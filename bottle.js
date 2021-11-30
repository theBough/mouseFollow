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
}//end Gun
