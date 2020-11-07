
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper,dustbin;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,300,30);
dustbin = new Dustbin(500,450,50,50);
ground = new Ground(600,600,1200,10);
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
ground.display();
  dustbin.display();
  paper.display();

  

  drawSprites();
 
}

function keyPressed (){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}


