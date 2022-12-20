var wave;
var playing = false;
var button;
var slider;
let r;
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
  r=random(0.1,10);

  
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
  if(-90<=accelerationY<0)
    {
      wave.amp(0.1);
      console.log("0.1");
    }
  if(0<=accelerationY<90)
    {
      wave.amp(5);
      console.log("5");
    }
  if(90<=accelerationY<180)
    {
      wave.amp(10);
      console.log("10");
    }
  //wave.amp(r);
  playing=true;
  //console.log(r);
  if((touches.x,0,120)&&(touches.y,0,400))
    {
    rect(0,0,120,400);
    fill(255);
    console.log("here");
    }
}

function touchEnded(){
  wave.amp(0);
  playing=false;
    if((touches.x,0,120)&&(touches.y,0,400))
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
  //r=map(accelerationX, -90,90,100,175);
}