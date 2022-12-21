//2번째-바 색상 변하기
var wave;
var wave2;
var wave3;
var wave4;
let c,c_,d,d_,e,f,f_,g,g_,a
var playing = false;
var button;
var slider;
let r,g,b;
function setup() {
  createCanvas(720, 600); //컨버스 크기
  wave=new p5.Oscillator();
  wave.setType('sine');
  wave.freq(261);
  wave.amp(0);
  
  wave2=new p5.Oscillator();
  wave2.setType('sine');
  wave2.freq(293);
  wave2.amp(0);
  
  wave3=new p5.Oscillator();
  wave3.setType('sine');
  wave3.freq(329);
  wave3.amp(0);
  
  wave4=new p5.Oscillator();
  wave4.setType('sine');
  wave4.freq(349);
  wave4.amp(0);
  
  wave5=new p5.Oscillator();
  wave5.setType('sine');
  wave5.freq(391);
  wave5.amp(0);
  
  wave6=new p5.Oscillator();
  wave6.setType('sine');
  wave6.freq(440);
  wave6.amp(0);
  
  wave1_=new p5.Oscillator();
  wave1_.setType('sine');
  wave1_.freq(277);
  wave1_.amp(0);
  
  wave2_=new p5.Oscillator();
  wave2_.setType('sine');
  wave2_.freq(311);
  wave2_.amp(0);
  
  wave4_=new p5.Oscillator();
  wave4_.setType('sine');
  wave4_.freq(369);
  wave4_.amp(0);
  
  wave5_=new p5.Oscillator();
  wave5_.setType('sine');
  wave5_.freq(415);
  wave5_.amp(0);
  
  
  rect(0,0,100,400);
  
  fill(0);
  rect(65,400,70,100);
  rect(165,400,70,100);
  rect(365,400,70,100);
  rect(465,400,70,100);
  
  fill(255);
  rect(100,0,100,400);
  rect(200,0,100,400);
  rect(300,0,100,400);
  rect(400,0,100,400);
  rect(500,0,100,400);
  

  rect(0,500,600,50);
  //g=119;
  //b=173;
  c,c_,d,d_,e,f,f_,g,g_,a=0;
  g=random(0,200);
  b=random(50,255);
  
  volume = createSlider(0,1, wave.amp,0.01)
  volume.size(300);
  
}

function draw(){
  fill(255);
  rect(0,0,100,400);

  r=random(50,255);
   fill(r,g,b);
  rect(0,500,600,50);
   

  //console.log(r,g,b);

  for(var i=0;i<touches.length;i++){
    textt();
  }

}
function toggle(){
  
}

function touchStarted(){
  // background(255);


  if((touches[0].x>0 && touches[0].x<100 && touches[0].y>0 && touches[0].y<400))
    {
    wave.start();
    wave.amp(volume.value());
    playing=true;
    //rect(0,0,100,400);
    //fill(87)
      c=1;
    console.log("here");
    }
  
  
  if((touches[0].x>100 && touches[0].x<200 && touches[0].y>0 && touches[0].y<400))
    {
    wave2.start();
    wave2.amp(volume.value());
    playing=true;
    //rect(100,0,100,400);
    //fill(87)
      d=1;
    }
  
    if((touches[0].x>200 && touches[0].x<300 && touches[0].y>0 && touches[0].y<400))
    {
    wave3.start();
    wave3.amp(volume.value());
    playing=true;
    //rect(200,0,100,400);
    //fill(87)
      e=1
    }
  
    if((touches[0].x>300 && touches[0].x<400 && touches[0].y>0 && touches[0].y<400))
    {
    wave4.start();
    wave4.amp(volume.value());
    playing=true;
    //rect(300,0,100,400);
    //fill(87)
      f=1
    }
  
    if((touches[0].x>400 && touches[0].x<500 && touches[0].y>0 && touches[0].y<400))
    {
    wave5.start();
    wave5.amp(volume.value());
    playing=true;
    //rect(400,0,100,400);
    //fill(87)
      g=1
    }
  
    if((touches[0].x>500 && touches[0].x<600 && touches[0].y>0 && touches[0].y<400))
    {
    wave6.start();
    wave6.amp(volume.value());
    playing=true;
    //rect(400,0,100,400);
    //fill(87)
      a=1
    }
//----------------------------------------
  
      if((touches[0].x>65 && touches[0].x<135 && touches[0].y>400 && touches[0].y<500))
    {
    wave1_.start();
    wave1_.amp(volume.value());
    playing=true;
    //rect(400,0,100,400);
    //fill(87)
      c_=1;
    }
  
      if((touches[0].x>165 && touches[0].x<235 && touches[0].y>400 && touches[0].y<500))
    {
    wave2_.start();
    wave2_.amp(volume.value());
    playing=true;
    //rect(400,0,100,400);
    //fill(87)
      d_=1;
    }
  
      if((touches[0].x>365 && touches[0].x<435 && touches[0].y>400 && touches[0].y<500))
    {
    wave4_.start();
    wave4_.amp(volume.value());
    playing=true;
    //rect(400,0,100,400);
    //fill(87)
      f_=1;
    }
  
      if((touches[0].x>465 && touches[0].x<535 && touches[0].y>400 && touches[0].y<500))
    {
    wave5_.start();
    wave5_.amp(volume.value());
    playing=true;
    //rect(400,0,100,400);
    //fill(87)
      g_=1;
    }
  //--------------------------------------------
  if(c==1&&d==1)
    {
    wave1_.start();
    wave1_.amp(volume.value());
    playing=true;
    }
  
  if(d==1&&e==1)
    {
    wave2_.start();
    wave2_.amp(volume.value());
    playing=true;
    }
  
  if(f==1&&g==1)
    {
    wave3_.start();
    wave3_.amp(volume.value());
    playing=true;
    }
    
  if(g==1&&a==1)
    {
    wave4_.start();
    wave4_.amp(volume.value());
    playing=true;
    }
  
}

function touchEnded(){
  wave.amp(0);
  wave2.amp(0);
  wave3.amp(0);
  wave4.amp(0);
  wave5.amp(0);
  wave6.amp(0);
  wave1_.amp(0);
  wave2_.amp(0);
  wave4_.amp(0);
  wave5_.amp(0);
  
  
  playing=false;

  
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

