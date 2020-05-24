let angle = 0;
let cnv;

function setup() {
    cnv = createCanvas(windowWidth/2, 400, WEBGL);
    cnv.position(windowWidth/2-10, 70);
}

function draw() {
    // background(0);
    background(0, 255, 0, 0);

    rectMode(CENTER);
    // noStroke();
    stroke(0);
    fill(0, 0, 255);
    rotateX(-mouseY * 0.003 - 20);
    rotateY(-mouseX * 0.003);
    box(60, 60, 60)

    angle += 0.07;
}

function windowResized() {
    console.log(windowWidth);
    cnv.position(windowWidth/2-10 ,70);
    resizeCanvas(windowWidth/2, 400);
  }