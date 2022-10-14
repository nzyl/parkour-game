var bg, bgImg;
var r;

function preload() {
  bgImg=loadImage("./assets/bg.png");
}

function setup() {
  createCanvas( 1800,750);
  bg=createSprite(900,375);
  bg.addImage(bgImg);
  bg.scale=0.8;
  bg.velocityX=-5;
}

function draw() {
  background(0);  
  
  if(bg.x<400){
    bg.x=width/2;
  }
  
  randomPlatforms();

  drawSprites();
}

function randomPlatforms(){
  if(frameCount%60===0){
    var platform=createSprite(1800,700,60,60);
    platform.velocityX=-5;
  }
}