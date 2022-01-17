function Bullseye(x,y,w,h){
  
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.bullseyeImage = loadImage("bullseye.png");
  
  this.display = function(){
    image(this.bullseyeImage,this.x, this.y, this.w, this.h);
  }//end display
  
}//end Gun
