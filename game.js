var r, b, g;

function setup(){
  createCanvas(800, 800);
  background(163, 129, 83);
  r = 163;
  g = 129;
  b = 83;
  fill(255);
  ellipse(590, 400, 100, 100);
  createImg('https://p7.hiclipart.com/preview/342/1008/947/chameleons-espio-the-chameleon-drawing-coloring-book-black-and-white-figure.jpg', 'Chameleon photo');
}

function draw(){
  stroke(0);
  fill(255);
  rect(50, 50, 205, 50);
  textSize(32);
  fill(0);
  text("Change color", 60, 75);
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  if (mouseIsPressed) {
    if (mouseX > 100 && mouseX < 200 && mouseY > 50 && mouseY < 100) {
      background(r, g, b);
    }
  }
}
  
  
