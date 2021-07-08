let drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 800; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(242, 206, 206);
  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].fall();
  }
}

class Drop {
  constructor() {
    this.x = random(width);
    this.y = random(-1800, -50);
    this.z = random(0, 20);
    this.yspeed = map(this.z, 0, 20, 1, 20);
    this.length = map(this.z, 0, 20, 10, 20);
    this.thick = map(this.z, 0, 20, 0, 3);
    this.grav = map(this.z, 0, 20, 0, 0.2);
  }
  fall() {
    this.y = this.y + this.yspeed;
    this.yspeed = this.yspeed + this.grav;
    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 1, 20);
    }
  }
  show() {
    strokeWeight(this.thick);
    stroke(173, 71, 71);
    line(this.x, this.y, this.x, this.y + this.length);
  }
}
