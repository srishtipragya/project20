var car,wall;
var speed,weight;
function setup() {
  createCanvas(1000,400);

  speed=random(55,90);
  weight=random(400,1500);
  
  car=createSprite(50,200,50,50);
  car.shapeColor="white";

  wall=createSprite(width-50, height/2, 50, height/2);
  wall.shapeColor="brown";

  car.velocityX=speed;

}

function draw() {
  background(0,0,0);  
  if(wall.x-car.x < wall.width/2+car.width/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation<100){
      car.shapeColor="green";
    }
    else if(deformation>=100 && deformation <=180){
      car.shapeColor="yellow";
    }
    else{
      car.shapeColor="red";
    }
  }
  drawSprites();
}