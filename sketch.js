var  wall ,thickness; 
var bullet , speed , weight ;



function setup() {
 createCanvas(1600,400);
  bullet=  createSprite(50, 200, 50, 20);
 
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor=(80,80,80);

  
  bullet.velocityX=speed;
}

function draw() {
  background("black");
 
 
 
  if (hascollided(bullet,wall))
  {
    if (bullet.isTouching(wall)) {
    bullet.velocityX=0;
    }
    
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10){
      wall.shapeColor=("red");
    }

    if (damage<10){
      wall.shapeColor=("green");
    }
    
  }

 bullet.collide(wall);

  drawSprites();
}

function hascollided (bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else 
  {
    return false ;
  }
}