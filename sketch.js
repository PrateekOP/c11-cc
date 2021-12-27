var jakeImg, pathImg, path, jake, left_boundary, right_boundary, coinImg;

var coin1 ,coin2 ,coin3;
function preload(){
 
  jakeImg=loadAnimation("Runner-1.png" ,"Runner-2.png");
  pathImg=loadImage("path.png");
  coinImg=loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.y=path.height/30;  

  jake=createSprite(180,340,30,30);
  jake.addAnimation("running", jakeImg);
 

  coin1=createSprite(200,200,80,90);
  coin1.addImage(coinImg);
  coin1.scale=0.3

  coin2=createSprite(100,200,80,90);
  coin2.addImage(coinImg);
  coin2.scale=0.3

  coin3=createSprite(300,200,80,90); 
  coin3.addImage(coinImg);
  coin3.scale=0.3;

  left_boundary=createSprite(0,300,100,600);

  right_boundary=createSprite(390,300,80,600);

 left_boundary.visible=false;

right_boundary.visible=false;
}

function draw() {
  background(0);

  path.velocityY=5;

  jake.x=World.mouseX;

  if(path.y>400) {
  path.y=height/2 ;

  
}
  jake.collide(left_boundary);
  jake.collide(right_boundary);

  edges=createEdgeSprites();

  jake.collide(edges[3]);

drawSprites();
}

