var wall,thickness;
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  bullet=createSprite(50,200,40,30)
  bullet.shapeColor=color("pink")
  thickness=random(23,88)
  wall=createSprite(1500,200,thickness,height/2)
  wall.shapeColor=color("white")
  bullet.velocityX=speed;
 
}

function draw() {
  background("black"); 
if(wall.x-bullet.x<(bullet.width+wall.width)/2){
  bullet.velocityX=0;
  var deformation=0.5*weight*speed*speed/22500
  if(deformation>180 ){
    bullet.shapeColor=color("red")
  }
  if(deformation<180 && deformation>100){
    bullet.shapeColor=color("yellow")
    
  }
  if(deformation<100){
    bullet.shapeColor=color("green")
    
  }
}
hasCollided();

if(hasCollided(bullet,wall)){
  bullet.velocity.x=0
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

  if(damage>10){
    wall.shapeColor=color(255,0,0)
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0)
  }
}

  drawSprites();
}
function hasCollided(){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}