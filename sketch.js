var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey, monkey_running
var food, banana, bananaImage, obstacle, obstacleImage
var bananaGroup, obstaclesGroup;
var JungleImage;
var score = 0

function preload() {

  monkey_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  JungleImage = loadImage("background.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight)

  background = createSprite(0, 0, 600, 500)
  background.addImage(JungleImage);
  background.scale = 2;

  ground = createSprite(400,370, 1000, 10);
 // ground.visible = false;

  monkey = createSprite(80, 355, 20, 20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1;

    bananaGroup = createGroup();
  obstaclesGroup = createGroup();
}

function draw() {
 

  background.velocityX = -4;

  if (background.x < 0) {
    background.x = background.width / 2;
  }
  if (touches.length>0||keyDown("space")) {
    monkey.velocityY = -12;
    touches=[];

  }
  monkey.velocityY = monkey.velocityY + 0.8;





  monkey.collide(ground);




  if (obstaclesGroup.isTouching(monkey)) {
    monkey.scale = 0.1;
    score=0;

  }
  if (bananaGroup.isTouching(monkey)) {
    bananaGroup.destroyEach();
    score = score + 2;



  }

  switch (score) {
    case 10:
      monkey.scale = 0.12;
      break;
    case 20:
      monkey.scale = 0.14;
      break;
    case 30:
      monkey.scale = 0.16;
      break;
    case 60:
      monkey.scale = 0.18;
      break;
    case 80:
      monkey.scale = 0.20;
      break;
    case 100:
      monkey.scale = 0.22;
      break;
    case 140:
      monkey.scale = 0.24;
      break;
    case 80:
      monkey.scale = 0.26;
      break;
    case 170:
      monkey.scale = 0.28;
      break;
    case 200:
      monkey.scale = 0.30;
      break;

    default:
      break;
  }


  spawnfoods()
  spawnObstacles()






  drawSprites();
  stroke("black");
  textSize(20);
  fill("white");
  text("score:" + score, 500, 50)


}

function spawnfoods() {

  if (frameCount % 80 === 0) {
    var food = createSprite(500, 120, 10, 10);
    food.y = Math.round(random(120, 200));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -4;
    food.lifeTime = 120
    bananaGroup.add(food)

  }
}


function spawnObstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400, 350, 10, 10)
    obstacle.lifetime = 100;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    obstaclesGroup.add(obstacle)
  }
}