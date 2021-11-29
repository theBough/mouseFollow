let imgGun;
let shootImageCycle;
function Gun(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  shootImageCycle = 0;
  imgGun = loadImage("shot0.png");

  this.display = function () {
    image(imgGun, this.x, this.y, this.w, this.h);
  };
  this.update = function () {
    this.x = mouseX - this.w / 2;
  };

  this.shoot = function () {
    switch (shootImageCycle) {
      case 0:
        imgGun = loadImage("shot1.png");
        shootImageCycle += 1;
        break;
      case 1:
        imgGun = loadImage("shot2.png");
        shootImageCycle += 1;
        break;
      case 2:
        imgGun = loadImage("reload.png");
        shootImageCycle += 1;
        break;
      case 3:
        imgGun = loadImage("reload2.png");
        shootImageCycle += 1;
        break;
      case 4:
        imgGun = loadImage("reload3.png");
        shootImageCycle += 1;
        break;
      case 5:
        imgGun = loadImage("reload4.png");
        shootImageCycle += 1;
        break;
      case 6:
        imgGun = loadImage("shot0.png");
        shootImageCycle = 0;
        clearInterval(shooting);
        break;
    }
  };
}
