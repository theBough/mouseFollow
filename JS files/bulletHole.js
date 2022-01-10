function BulletHole(x,y,w,h){
  
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.bulletHoleImage = loadImage("bulletHole.png");
  
  this.display = function(){
    image(this.bulletHoleImage,this.x, this.y, this.w, this.h);
  }//end display
  
}//end Gun
