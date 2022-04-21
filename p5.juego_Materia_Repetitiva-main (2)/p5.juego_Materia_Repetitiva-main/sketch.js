var bg, sleep, brush, eat, gym, drink, move;
var astronaut;
var edges;
function preload(){
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
  bath = loadAnimation("bath1.png","bath2.png");
}
function setup() {
  createCanvas(800,400);
   astronaut =createSprite(400, 200, 50, 50);
   astronaut.addAnimation("sleeping",sleep);
   astronaut.scale = 0.1;
}

function draw() {
  background(bg);  
  textSize(20);
  fill("white")
  text("Instrucciones:",20,40);
  textSize(15);
  text("Flecha hacia Arriba = Cepillarse:",20,60);
  text("Flecha hacia Abajo = Ejercitarse:",20,120);
  text("Flecha hacia Derecha = Comer:",20,100);
  text("Flecha hacia Izquierda = Bañarse:",20,80);
  text("Tecla M = Moverse:",20,140);
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);
  if (keyDown(UP_ARROW)) {
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown(DOWN_ARROW)) {
    astronaut.addAnimation("exercising",gym);
    astronaut.changeAnimation("exercising");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown(RIGHT_ARROW)) {
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown(LEFT_ARROW)) {
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  drawSprites();
}