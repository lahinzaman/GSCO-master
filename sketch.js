var car,wall;
var speed,weight;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,200);
  car.velocityX=speed
  car.shapeColor="green";

  wall.isStatic;
}

function draw() {
  background(255,255,255);  

if (car.x - wall.x === wall.width/2 + car.width/2) {


}

  drawSprites();


}


