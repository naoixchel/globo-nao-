var fondo;
var bg;
var globo, globoImg;

function preload() {
  fondo = loadImage ("paisaje.jpg");
  globoImg = loadImage ("globo.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  bg = createSprite(650,400);
  bg.addImage (fondo);

  globo = createSprite(70,displayHeight/2);
  globo.addImage(globoImg);
  globo.scale = 0.4;
  
}

function draw() 
{
  background(51);
  if(keyDown("space")){
    globo.velocityY = -15;
  }
 globo.velocityY = globo.velocityY +5;
  drawSprites();
}

