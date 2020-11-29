const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin, ball, ground;
var stick1,stick2,stick3;
var world;

function setup(){
	createCanvas(1000,400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbin = new Dustbin(900,350);
	ball = new Paper(200,300,50);
	ground = new Ground(width/2,400,width,20);
	stick1 = new Stick(850,350,20,80)
	stick2 = new Stick(950,350,20,80)
	//Create a Ground

	Engine.run(engine);
}

function draw(){

	rectMode(CENTER);
	background(0);

	ball.display();
	ground.display();
	dustbin.display();
	stick1.display();
	stick2.display();

}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:115,y:-100});
		
	}
	

}