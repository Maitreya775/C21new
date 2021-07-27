var fixedRect, movingRect, car ,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(100,200,20,20)
  car.shapeColor = "red"
  car.velocityX=2
  wall = createSprite(400,200,10,100)
  wall.shapeColor="blue"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(movingRect,fixedRect)){
   fixedRect.shapeColor= "blue"
   movingRect.shapeColor= "blue"
 }
 else{
   fixedRect.shapeColor="green"
   movingRect.shapeColor="green"
 }
 if(isTouching(car,wall)){
   car.shapeColor="yellow"
   wall.shapeColor="yellow"
 }
 else{
   car.shapeColor="red"
   wall.shapeColor="blue"
 }
  drawSprites();
}
