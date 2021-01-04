var car, carImage;
var speed, weight;

function preload(){
carRed = loadImage("carr.png");
carYellow = loadImage("cary.png")
carGreen = loadImage("carg.png")
bkg = loadImage("city.jpg")
}

function setup() {
  createCanvas(1600,400);

  bg = createSprite(800, 200, 1600, 400)
bg.addImage(bkg)

  speed = random(55,90);
  weight = random(400, 1500);

car = createSprite(50, 200, 50, 50);
car.shapeColor = "black";
car.velocityX = speed;


wall = createSprite(1500, 200, 60, height/2);
wall.shapeColor = "black";

deformation = 0.5 * weight * speed * speed / 22500
}

function draw() {
  background("lightCyan");

if (car.collide(wall)) {

 if (deformation < 100 ){
   car.addImage(carGreen)
   car.x = 1300;
   car.y = 200;
   fill("lime");
   textSize(200);
   text("best !!",500, 250);
 }

 if (deformation > 100 && deformation < 180){
  car.addImage(carYellow)
   fill("yellow");
   textSize(200);
   text("average",500, 250);
 }

 if (deformation > 180){
  car.addImage(carRed)
   fill("red");
   textSize(200);
   text("! worst !",500, 250);
 }
} 

  drawSprites();
  if(car.shapeColor === "lime")
  { fill("lime"); 
  textSize(200); 
  text("best !!",500, 250); } 

  if(car.shapeColor === "yellow")
  { fill("yellow"); 
  textSize(200); 
  text("average",500, 250); } 

  if(car.shapeColor === "red")
  { fill("red"); 
  textSize(200); 
  text("! worst !",500, 250); } 
}