
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    bob1 = new Bob(400,20,30);
	roof = new Ground(400,100,500,20)
	rope1 = new Rope(bob1.body,roof.body, {x: 400, y:400})	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  rope1.display();
  roof.display();
  bob1.display();
 
}



