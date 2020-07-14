var gameOn, lives, score, yPos_user;
var line1_x, line1_y, line1_len, speed1;
var line2_x, line2_y, line2_len, speed2;

function setup() {
  createCanvas(400, 400);
  frameRate(75);
  background(214, 236, 255);
  gameOn = true;
  lives = 3;
  score = 0;
  yPos_user = 200;

  line1_x = 440;
  line1_y = random(100, 350);
  line1_len = random(30, 320);

  line2_x = 640;
  line2_y = random(100, 350);
  line2_len = random(30, 320);

  speed1 = 1;
  speed2 = 1;
}

function draw() {
  if (gameOn == true) {
    background(214, 236, 255);
    noStroke();
    fill(43, 144, 252);
    //lives
    if (lives == 3) {
      ellipse(30, 30, 30);
      ellipse(30, 70, 30);
      ellipse(30, 110, 30);
    } else if (lives == 2) {
      ellipse(30, 30, 30);
      ellipse(30, 70, 30);
    } else if (lives == 1) {
      ellipse(30, 30, 30);
    } else {
      gameOn = false;
    }
    //score box
    rect(180, 15, 200, 60, 60);
    fill(51, 51, 51);
    textSize(32);
    text("Score: " + score, 220, 55);
    //ball
    fill(255, 213, 97);
    ellipse(100, yPos_user, 30, 30);

    if (keyIsPressed && keyCode == 32) {
      yPos_user -= 10;
    } else {
      yPos_user += 10;
    }
    if (yPos_user > 385) {
      yPos_user = 385;
    }
    if (yPos_user <= 15) {
      yPos_user = 15;
    }
    //lines
    stroke(0);
    strokeWeight(4);

    line(line1_x, line1_y, line1_x + line1_len, line1_y);
    line(line2_x, line2_y, line2_x + line2_len, line2_y);

    line1_x = line1_x - speed1;
    line2_x = line2_x - speed2;

    if (line1_x < 0 - line1_len) {
      line1_x = 400;
      line1_y = random(100, 350);
      line1_len = random(30, 320);
      speed1 += 0.5;
      lives--;
    }

    if (line2_x < 0 - line2_len) {
      line2_x = 400;
      line2_y = random(100, 350);
      line2_len = random(30, 320);
      speed2 += 0.5;
      lives--;
    }

    if (line1_y < yPos_user + 30 && line1_y > yPos_user - 30) {
      if (line1_x < 115 && line1_x + line1_len > 85) {
        line1_x = 400;
        score++;
        line1_y = random(100, 350);
        line1_len = random(30, 320);
        speed1 += 0.1;
      }
    }
    if (line2_y < yPos_user + 30 && line2_y > yPos_user - 30) {
      if (line2_x < 130 && line2_x + line2_len > 70) {
        line2_x = 400;
        score++;
        line2_y = random(100, 350);
        line2_len = random(30, 320);
        speed2 += 0.1;
      }
    }
  } // end of Game on
  else {
    background(214, 236, 255);
    noStroke();
    fill(43, 144, 252);
    rect(50, 100, 300, 200, 60);
    fill(214, 236, 255);
    rect(70, 120, 260, 56, 60);
    rect(70, 200, 260, 75, 60);

    fill(51);
    textSize(35);
    text("Score: " + score, 130, 159);
    text("Restart", 145, 248);

    if (mouseIsPressed) {
      if (mouseX > 70 && mouseX < 330 && mouseY > 200 && mouseY < 275) {
        gameOn = true;
        lives = 3;
        score = 0;
        yPos_user = 200;

        line1_x = 440;
        line1_y = random(100, 350);
        line1_len = random(50, 320);

        line2_x = 640;
        line2_y = random(100, 350);
        line2_len = random(50, 320);

        speed1 = 1;
        speed2 = 1;
      }
    }
  }
}
