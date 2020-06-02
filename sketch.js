var wall,thickness;
var speed,weight,height,bullet;
var deformation;
var damage;

function setup() {
  createCanvas(1600,400);
  height = 400;
  thickness=random(22,83);
  bullet = createSprite(50,200,50,20);
  wall = createSprite(1200,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX = speed;
  console.log(speed);
  console.log(damage); 
}

function draw() {
  background(10,10,10);  
  wall.shapeColor=color(80,80,80);
  bullet.shapeColor = color(255,255,255);
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(weight===32 && speed===223 && thickness===70 && damage===3.68){
      wall.shapeColor=color(0,255,0)
    }

    if(weight===32 && speed===223 && thickness===40 && damage===12.43 && damage > 10){
     wall.shapeColor=color(255,0,0);
    }
  }
 

  drawSprites();
}

function hasCollided(obj1,obj2){
  if(obj2.x-obj1.x < (obj1.width+obj2.width)/2){
    return true;
  }
  else{
    return false;
  }
}
