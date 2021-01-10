var car,car1,car2,car3;
var speed,weight,wall;

function setup() {
createCanvas(1600,400);

speed1=Math.round(random(55,90));
speed2=Math.round(random(55,90));
speed3=Math.round(random(55,90));
speed4=Math.round(random(55,90));
weight=Math.round(random(400,1500));

wall=createSprite(1500,200,20,400);
wall.shapeColor="white";
wall.debug=true;

car= createSprite(200,50,50, 50);
car.shapeColor="white";
car.velocityX=speed1;
car1=createSprite(200,150,50,50);
car1.shapeColor="white";
car1.velocityX=speed2;
car2=createSprite(200,250,50,50);
car2.velocityX=speed3;
car2.shapeColor="white";
car3=createSprite(200,350,50,50);
car3.velocityX=speed4;
car3.shapeColor="white";

}

function draw() {
background("black"); 

if (car.isTouching(wall)){
car.velocityX=0;
color1(); 
}

if (car1.isTouching(wall)){
  car1.velocityX=0;
  colorie2();
}
if (car2.isTouching(wall)){
  car2.velocityX=0;
  cadar3();
}
if (car3.isTouching(wall)){
  car3.velocityX=0;
  corucelt4();
}
console.log(wall.x) 
drawSprites();
}
