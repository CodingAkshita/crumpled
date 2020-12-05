
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj;
var paper;
var ground;
var world;

function setup() {
	var canvas = createCanvas(1600,700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,670,width,20);
	paperObject = new Paper(200,450,70);
	dustbinObj = new dustbin(1110,660);

	var render = Render.create({
	element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); 
	
    

	Engine.run(engine);
  
}

function draw() {
	
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  ground.display();
  dustbinObj.display();
  paperObject.display();
 
 

  drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW){

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}
}
