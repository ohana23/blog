let angle = 0;
let cnv;
let modelObj;

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

    scale(0.25);
    rotateY(angle);
    rotateX(9.6);
    rotateZ(6.4);
    push();
    translate(330, -400, 0);
    // normalMaterial();
    fill(0, 0, 255, 100);
    model(modelObj);
    pop();

    angle += 0.01;
}

function windowResized() {
    resizeCanvas(windowWidth, 300);
  }