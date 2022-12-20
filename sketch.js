//2번째-바 색상 변하기
var wave;
var playing = false;
var button;
var slider;
let r,g,b;
function setup() {
  createCanvas(720, 500); //컨버스 크기
  wave=new p5.Oscillator();
  wave.setType('sine');
  wave.freq(261);
  wave.amp(0);
  rect(0,0,100,400);
  rect(100,0,100,400);
  rect(200,0,100,400);
  rect(300,0,100,400);
  rect(400,0,100,400);

  rect(0,450,600,50);
  //g=119;
  //b=173;

  g=random(0,200);
  b=random(50,255);
  
  volume = createSlider(0,1, wave.amp,0.01)
  volume.size(300);
  
}

function draw(){
  //r=random(50,255);
  // fill(r,g,b);
  // rect(0,450,600,50); 여기!!!주석 풀기

  //console.log(r,g,b);

  for(var i=0;i<touches.length;i++){
    textt();
  }

}
function toggle(){
  
}

function touchStarted(){
  // background(255);
  wave.start();
  wave.amp(volume.value());
  playing=true;

  if((touches.x,0,120)&&(touches.y,0,400))
    {
    rect(0,0,100,400);
    fill(255)
  
    console.log("here");
    }
}

function touchEnded(){
  wave.amp(0);
  playing=false;
    if((touches.x,0,120)&&(touches.y,0,400))
    {
    rect(0,0,100,400);
    fill(87);
    }
  
}

function textt(){
  text(touches.length, 200, 200);
  text(touches[0].x, 200, 220);
  text(touches[0].y, 200, 240);
  text(touches[1].x, 200, 260);
  text(touches[1].y, 200, 280);
}

function deviceMoved(){
  r=map(accelerationX, -90,90,100,175);
}