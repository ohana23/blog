let angle = 0;
let pos = 1;
let cnv;

function setup() {
    // cnv = createCanvas(windowWidth/2, 350, WEBGL);
    cnv = createCanvas(windowWidth, 350, WEBGL);
    // cnv.position(windowWidth/2-30, 70);
    cnv.position(0, 80);
}

function draw() {
    // background(0);
    background(0, 0, 0, 0);

    // rectMode(TOP);
    // noStroke();
    stroke(0);
    fill(0, 0, 255);
    rotateX(pos * .01);
    rotateX(-mouseY * 0.003);
    rotateY(-mouseX * 0.003);
    box(60, 60, 60);

    angle += 0.07;
}

// function mouseWheel(event) {
//     print(event.delta);
//     //move the square according to the vertical scroll amount
//     pos += event.delta;
//     //uncomment to block page scrolling
//     // return false;
// }

function windowResized() {
    // cnv.position(windowWidth/2-30 ,70);
    // resizeCanvas(windowWidth/2, 350);
    resizeCanvas(windowWidth, 350);
  }