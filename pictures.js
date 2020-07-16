var myImg1, myImg2, myImg3, myImg4, myImg5;
var x1, x2, x3, x4, x5;
//var img1, img2, img3, img4, img5

function preload(){
  myImg1 = loadImage("IMG_20200515_102815702.jpg");
  myImg2 = loadImage("IMG_20200621_173750138_HDR.jpg");
  myImg3 = loadImage("IMG_20200622_155245501_HDR.jpg");
  myImg4 = loadImage("IMG_20200707_162112105_HDR.jpg");
  myImg5 = loadImage("IMG_20200709_175335461.jpg");
}

function setup(){
  createCanvas(400, 400);
  background(200);
  x1 = -400;
  x2 = 0;
  x3 = 400;
  x4 = 800;
  x5 = 1200;
}

function draw(){
  image(myImg1, x1, 0, 400, 400);
  image(myImg2, x2, 0, 400, 400);
  image(myImg3, x3, 0, 400, 400);
  image(myImg4, x4, 0, 400, 400);
  image(myImg5, x5, 0, 400, 400);
  
  strokeWeight(5);
  line(385, 200, 370, 185);
  line(385, 200, 370, 215);
  
  line(15, 200, 30, 185);
  line(15, 200, 30, 215);
  
  if(mouseX < 400 && mouseX > 355 && mouseY < 220 && mouseY > 180){
    fill(250);
    noStroke();
    rect(355, 180, 45, 40);
    stroke(0);
    strokeWeight(5);
    line(385, 200, 370, 185);
    line(385, 200, 370, 215);
    if(mouseIsClicked){
      x1 -= 400;
      x2 -= 400;
      x3 -= 400;
      x4 -= 400;
      x5 -= 400;
    }
  }
  
  if(mouseX < 400 && mouseX > 365 && mouseY < 220 && mouseY > 180){
    fill(230);
    noStroke();
    rect(0, 180, 45, 40);
    strokeWeight(5);
    line(15, 200, 30, 185);
    line(15, 200, 30, 215);
    if(mouseIsClicked){
      x1 += 400;
      x2 += 400;
      x3 += 400;
      x4 += 400;
      x5 += 400;
    }
  }
  
  if(x1 == -800){
    x1 = 1200;
  }
  
  if(x2 == -800){
    x2 = 1200;
  }
  
  if(x3 == -800){
    x3 = 1200;
  }
  
  if(x4 == -800){
    x4 = 1200;
  }
  
  if(x5 == -800){
    x5 = 1200;
  }
  
  if(x1 == 1600){
    x1 == -400;
  }
  
  if(x2 == 1600){
    x2 == -400;
  }
  
  if(x3 == 1600){
    x3 == -400;
  }
  
  if(x4 == 1600){
    x4 == -400;
  }
  
  if(x5 == 1600){
    x5 == -400;
  }
}
