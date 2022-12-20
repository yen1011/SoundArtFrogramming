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
  rect(0,0,120,400);
  fill(255);
  rect(120,0,120,400);
  fill(255);
  rect(240,0,120,400);
  fill(255);
  rect(360,0,120,400);
  fill(255);
  rect(480,0,120,400);
  fill(255);
  r=random(50,255);
  g=random(0,200);
  b=random(50,255);
  
  // button=createButton('play/pause');
  
}

function draw(){
  rect(0,400,720,50);
  fill(r,g,b);
  
//  if(playing){
    
//  } else{

//  }

  for(var i=0;i<touches.length;i++){
    textt();
  }
}
function toggle(){
//   if(!playing){
    
//   }else{
    
//   }
}

function touchStarted(){
  // background(255);
  wave.start();
  wave.amp(0.5);
  playing=true;
  if(touches.x,0,120&&touches.y,0,400)
    {
    rect(0,0,120,400);
    fill(255);
    console.log("here");
    }
}

function touchEnded(){
  wave.amp(0);
  playing=false;
    if(touches.x,0,120&&touches.y,0,400)
    {
    rect(0,0,120,400);
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
  r=map(accelerationX-90, 90, 100, 175);
  g=map(accelerationX-90, 90, 100, 200);
  b=map(accelerationX-90, 90, 100, 200);
  
}