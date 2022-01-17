function Duck(x,y,w,h){
  
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.duckImage = loadImage("duckGood.png");
  this.ceil = this.y +1;
  this.floor = this.y - 10;
  this.speed = 0.25
  
  this.display = function(){
    image(this.duckImage,this.x, this.y, this.w, this.h);
  }//end display
  this.update = function(){
    this.x -= 1;
    if(this.x < 0){
      this.x = width
    }//end if
    this.y += this.speed;
    if(this.y < this.floor || this.y > this.ceil){
      this.speed *= -1;
    }
  }//end update
  
}//end Gun
