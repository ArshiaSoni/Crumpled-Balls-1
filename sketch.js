const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground); 	

	 bottom = new Dustbin(600, 640, 100, 20);
	 side1 = new Dustbin(550, 600, 20, 100);
	 side2 = new Dustbin(650, 600, 20, 100);
	 paper = new Paper(200, 200, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  fill ("brown");
  rect (ground.position.x, ground.position.y, width, 10);

  bottom.display();
  side1.display();
  side2.display();

  paper.display();
}

function keyPressed() {
	if (keyCode == UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position ,{x:50,y:-50});

	}
}




