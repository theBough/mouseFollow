function Duck(x,y,w,h){
  
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.duckImage = loadImage("duckGood.png");
  
  this.display = function(){
    image(this.duckImage,this.x, this.y, this.w, this.h);
  }//end display
  this.update = function(){
    this.x -= 3;
    if(this.x < 0){
      this.x = width
    }//end if
  }//end update
  
}//end Gun
