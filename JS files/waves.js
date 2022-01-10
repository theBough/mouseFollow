function Waves(x,y,w,h){
  
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.wavesImage = loadImage("waves.png");
  
  this.display = function(){
    image(this.wavesImage,this.x, this.y, this.w, this.h);
  }//end display
  
  this.update = function (){
    this.x -= 1
    if(this.x < -400){
      this.x = 400;
    }//end if
  }//end update
}//end Gun
