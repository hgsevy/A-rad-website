var r, b, g;

function preload(){
  img = loadImage('hiclipart.com.png');
}

function setup(){
  createCanvas(1000, 800);
  background(163, 129, 83);
  r = 163;
  g = 129;
  b = 83;
  fill(255);
  ellipse(645, 477, 115, 115);
  image(img, -100, 0);
}

function draw(){
  stroke(0);
  fill(255);
  rect(50, 50, 205, 50, 20);
  textSize(32);
  fill(0);
  text("Change color", 58, 84);
  if (mouseIsPressed) {
    if (mouseX > 50 && mouseX < 255 && mouseY > 50 && mouseY < 100) {
      r = random(0, 255);
      g = random(0, 255);
      b = random(0, 255);
      background(r, g, b);
      
      fill(255);
      ellipse(645, 472, 115, 115);
      image(img, -100, 0);
    }
  }
}
  
  
