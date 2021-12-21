function Duck(x,y,w,h){
  
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.duckImage = loadImage("bottle.png");
  
  this.display = function(){
    image(this.duckImage,this.x, this.y, this.w, this.h);
  }//end display
  
}//end Gun
