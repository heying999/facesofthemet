function Bubble(x, y, img) {
  // this.x = x;
  // this.y = y;
  this.x = mouseX || touchX;
  this.y = mouseY || touchY;
  this.img = img;
  // this.r = 48;
  // this.col = color(255);
  
  this.update = function(){
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    
  }
  
  this.display = function(){
    stroke(255);
    fill(255,100);
    //ellipse(this.x,this.y, 48, 48);
    imageMode(CENTER);
    image(this.img, this.x, this.y, img.width, img.height);
  }
  
  
  
  
}