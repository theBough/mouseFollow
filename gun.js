let imgGun;
function Gun(x,y,w,h){
  this.x = x;
  this.y  =y;
  this.w = w;
  this.h = h;
  imgGun = loadImage("shot0.png");
  
  this.display = function(){
    image(imgGun, this.x, this.y, this.w, this.h);
  }
  this.update = function(){
    this.x = mouseX;
  }
}
