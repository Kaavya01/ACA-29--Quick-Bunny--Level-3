var bunny, bunnyImage;
var carrot, carrotImage;
var edges;
var snake, snakeImage;
var bg;

function setup() {
createCanvas(600,600);
  bg=loadImage("bg.png");
  snakeImage=loadImage("snake.png");
  carrotImage=loadImage("carrot.png");
  bunnyImage=loadImage("bunnyImg.png");

edges=createEdgeSprites();
bunny = createSprite(40,550,15,15); 
carrot = createSprite(560,40,30,30);
brick1 = createSprite(0,270,100,25);
brick1.velocityX = 0;
brick2 = createSprite(150,270,100,25);
brick2.velocityX = 0;
brick3 = createSprite(300,270,100,25);
brick3.velocityX = 0;
brick4 = createSprite(450,270,100,25);
brick4.velocityX = 0;
brick5 = createSprite(600,270,100,25);
brick5.velocityX = 0;
brick6 = createSprite(-35,210,100,25);
brick6.velocityX = 0;
brick7 = createSprite(-50,210,100,25);
brick7.velocityX = 0;
brick8 = createSprite(100,210,100,25);
brick8.velocityX = 0;
brick9 = createSprite(250,210,100,25);
brick9.velocityX = 0;
brick10 = createSprite(400,210,100,25);
brick10.velocityX = 0;
brick11 = createSprite(550,210,100,25);
brick11.velocityX = 0;
snake1 = createSprite(300,300,100,15);
snake1.velocityX = 7;
snake2 = createSprite(300,375,100,15);
snake2.velocityX = -7;
snake3 = createSprite(300,175,100,15);
snake3.velocityX = -5;
snake4 = createSprite(300,100,100,15);
snake4.velocityX = 5;
  
carrot.shapeColor = "pink"
brick1.shapeColor = "maroon" 
brick2.shapeColor = "maroon"
brick3.shapeColor = "maroon"
brick4.shapeColor = "maroon"
brick5.shapeColor = "maroon"
brick6.shapeColor = "maroon"
brick7.shapeColor = "maroon"
brick8.shapeColor = "maroon"
brick9.shapeColor = "maroon"
brick10.shapeColor = "maroon"
brick11.shapeColor = "maroon"
snake1.shapeColor = "yellow"
snake2.shapeColor = "yellow"
snake3.shapeColor = "yellow"
snake4.shapeColor = "yellow"
bunny.shapeColor= "white"
}

function draw() {
background(bg);
  snake1.addImage(snakeImage);
  snake1.scale=random(0.1,0.4);
  snake2.addImage(snakeImage);
  snake2.scale=random(0.1,0.4);
  snake3.addImage(snakeImage);
  snake3.scale=random(0.1,0.4);
  snake4.addImage(snakeImage);
  snake4.scale=random(0.1,0.4);
  carrot.addImage(carrotImage);
  carrot.scale=(0.1);
  bunny.addImage(bunnyImage);
  bunny.scale=(0.1)

bunny.bounceOff(edges[0]);
bunny.bounceOff(edges[1]);
bunny.bounceOff(edges[2]);
bunny.bounceOff(edges[3]);
snake1.bounceOff(edges[1]);
snake1.bounceOff(edges[0]);
snake2.bounceOff(edges[1]);
snake2.bounceOff(edges[0]);
snake3.bounceOff(edges[1]);
snake3.bounceOff(edges[0]);
snake4.bounceOff(edges[1]);
snake4.bounceOff(edges[0]);

if(keyDown("up")){
  bunny.y=bunny.y-3;
}
if(keyDown("down")){
  bunny.y=bunny.y+3;
}
if(keyDown("left")){
  bunny.x=bunny.x-3;
}
if(keyDown("right")){
  bunny.x=bunny.x+3;
}
if(bunny.isTouching(carrot)){
  text("YOU WIN",100,100);
}
if(bunny.isTouching(brick1)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick2)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick3)){
  bunny.x=40;
  bunny.y=550; 
}
if(bunny.isTouching(brick4)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick5)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick6)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick7)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick8)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick9)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick10)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick11)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(snake1)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(snake2)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(snake3)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(snake4)){
  bunny.x=40;
  bunny.y=550;
}
  drawSprites();
}