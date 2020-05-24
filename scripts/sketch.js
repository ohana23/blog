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
    let r = random(0, 0.03)
    background(0, 0, 0, 0);
    ambientLight(234, 241, 255);

    noStroke();
    // fill(0, 0, 255);
    // normalMaterial();
    // rotateX(pos * .01);
    // rotateX(-mouseY * 0.003);
    // rotateX(angle);
    // rotateY(-mouseX * 0.003);
    // box(60, 60, 60);
    push();
    ambientMaterial(234, 241, 255);
    rotateY(angle);
    torus(80, 14, 50, 100);
    pop();

    fill(0);
    box(60, 60, 60);

    angle += 0.02 + r;
}

function mouseWheel(event) {
    print(event.delta);
    //move the square according to the vertical scroll amount
    pos += event.delta;
    //uncomment to block page scrolling
    // return false;
}

function windowResized() {
    // cnv.position(windowWidth/2-30 ,70);
    // resizeCanvas(windowWidth/2, 350);
    resizeCanvas(windowWidth, 350);
  }