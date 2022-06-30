
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	var ball_options={
		isStatic:false,
		restituition:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(300,200,20,ball_options);
	World.add(world,ball);

	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(850,600,20,120);

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
	ground.show();
	leftSide.show();
	rightSide.show();
	ellipse(ball.position.x,ball.position.y,20,20);
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:45,y:-45});
	}
}


