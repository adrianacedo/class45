var ball
var enemyg;
var score =0;
function preload(){
  marioimg = loadAnimation("mario1.png","mario2.png","mario3.png")
  groundimg = loadImage("ground-removebg-preview.png");
  bgimg = loadImage("mariobg.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  background = createSprite(width/2,height/2);
  background.addImage(bgimg)
   ball = createSprite(50, height-200,20,20);
  ball.addAnimation("mario",marioimg);
  ball.scale = 2.5;
  ground = createSprite(width/2,height-80,width,20)
  ground.visible = false;
  enemyg = new Group();
  coing = new Group();
}

function draw() {
  //background(bgimg);
  background.velocityX = -5;
  if(background.x<900){
    background.x = background.width/2;
  }
  textSize(35);
  fill("green");
  text("Score"+score,width-150,30)
  if(keyDown("space")){
    ball.velocityY = -6
  }
  console.log(ground.height)
  ball.velocityY =ball.velocityY+0.8
  ground.velocityX = -3;
  if(ground.x<50){
    ground.x = ground.width/2;
  } 
  ball.collide(ground);
  for(var i = 0;i<coing.length;i++){
    if(coing.get(i).isTouching(ball)){
      coing.get(i).destroy();
      score = score+1;
    }
  }
  if(enemyg.isTouching(ball)){
    ball.destroy();
  }
  spawnenemy();
  spawncoin();
  drawSprites();
}
function spawnenemy(){
  if(frameCount % 80===0){
enemy = createSprite(width,height-200,20,60);
enemy.velocityX =-4;
enemyg.add(enemy)
}
}
function spawncoin(){
  if(frameCount % 50===0){
coin = createSprite(width,height-200,50,50);
coin.y = Math.round(random(30,height-200));
coin.x = Math.round(random(50,width));
coin.velocityX =-4;
coin.lifetime = 200;
coing.add(coin)
}
}