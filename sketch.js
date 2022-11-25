var wave;
var playing = false;
var button;
function setup() {
  //createCanvas(displayWidth,displayHeight);
createCanvas(640, 480);
wave = new p5.Oscillator();
wave.setType('sine');
wave.start();
wave.freg(440);
wave.amp(0);

button = createButton('play/pause');
button = mousePressed(toggle);
}

function toggle() {
  if(!playing) {
    wave.amp(0.5, 1);
    playing = true;
  } else {
    wave.amp(0,1);
    playing = false;
  }
}

// function draw() {
//   background(220);
// }\watch