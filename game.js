var r, b, g;

function setup(){
  img = loadImage('hiclipart.com.png');
  background(163, 129, 83);
  r = 163;
  g = 129;
  b = 83;
  fill(255);
  ellipse(590, 400, 100, 100);
  image(img, 0, 0);
}

function draw(){
  stroke(0);
  fill(255);
  rect(50, 50, 205, 50, 20);
  textSize(32);
  fill(0);
  text("Change color", 60, 80);
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  if (mouseIsPressed) {
    if (mouseX > 100 && mouseX < 200 && mouseY > 50 && mouseY < 100) {
      background(r, g, b);
    }
  }
}
  
  
