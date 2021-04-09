
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,box,box1,box2,box3,ground;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(900,410,200,20);
	box2 = new Box (800,370,20,100);
	box3 = new Box (1000,370,20,100);
	ground = new Ground(600,430,width,20);
	paper = new Paper(200,0,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   box1.display();
   box2.display();
   box3.display();
   ground.display();
   paper.display();


  drawSprites();
 
}


function keyPresed(){
if(keycode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}

}















