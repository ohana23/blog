let angle = 0;
let cnv;
let modelObj;
let scaleVal = 0;

function preload() {
    modelObj = loadModel('assets/NOVELO_EARTH.obj');
}

function setup() {
    cnv = createCanvas(windowWidth, 300, WEBGL);
    cnv.position(0, 80);
}

function draw() {
    background(0, 0, 0, 0);
    // ambientLight(234, 241, 255);

    noStroke();

    scale(scaleVal);
    rotateY(angle);
    rotateX(9.6);
    rotateZ(6.4);
    push();
    translate(330, -400, 0);
    // normalMaterial();
    fill(0, 0, 255, 100);
    model(modelObj);
    pop();

    if (scaleVal <= 0.25) scaleVal += 0.03;
    angle += 0.01;
}

function windowResized() {
    resizeCanvas(windowWidth, 300);
  }