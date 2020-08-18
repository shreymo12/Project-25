
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paper;
var Trash;
var ground;


function preload()

{


	
}

function setup() {
	createCanvas(1600, 700);



	engine = Engine.create();
	world = engine.world;
	
	
	

	//Create the Bodies Here.


	Paper = new paper(200,450,70);
	

	ground = new Ground(800,670,1600,20);

	Trash=new dustbin(1200,650);


	

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  Paper.display();
  ground.display();
  Trash.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(Paper.body,Paper.body.position,{x:130,y:-145});
	 
  
	}

}


