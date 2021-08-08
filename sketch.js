const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var lowSpeed=[];
var danger=[];
var bonus=[];
var speedBoost=[];
var score =0;

var img1,sb
var img2,ls
var img3,bs
var img4,de

function preload(){
img1=loadImage("images/speed boost icon.png")
img2=loadImage("images/low speed icon.png")
img3=loadImage("images/bonus.png");
imag4=loadImage("images/danger icon.png");

}

function setup() {

  createCanvas(800, 750);
  engine = Engine.create();
  world = engine.world;
 
 ball=new Ball()

 sb=createSprite(50,50)
 sb.addImage(img1)
sb.visible=false
sb.scale=0.2

ls=createSprite(50,50)
 ls.addImage(img1)
ls.visible=false
ls.scale=0.2

bs=createSprite(50,50)
 bs.addImage(img1)
bs.visible=false
bs.scale=0.2

de=createSprite(50,50)
 de.addImage(img1)
de.visible=false
de.scale=0.2
  
}
 


function draw() {
  
  background("black");
  textSize(20)
  
  drawSprites()
  Engine.update(engine);
 
 ball.display() 
 

  //create the particles using frameCount
  if (frameCount%60===0){
    particles.push(new Particles(random(50,750),0))
  }


  //display the particles \
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

 if (frameCount%500===0){
  lowSpeed.push(new LowSpeed())
  }

  for (var k = 0; k < lowSpeed.length; k++) {
    lowSpeed[k].display();
  }

  if (frameCount%910===0){
    danger.push(new Danger())
    }
  
    for (var l = 0; l < danger.length; l++) {
      danger[l].display();
    }

    if (frameCount%720===0){
      bonus.push(new Bonus())
      }
    
      for (var a = 0; a < bonus.length; a++) {
        bonus[a].display();
      }

      if (frameCount%375===0){
        speedBoost.push(new SpeedBoost())
        }
      
        for (var b = 0; b < speedBoost.length; b++) {
          speedBoost[b].display();
        }
}