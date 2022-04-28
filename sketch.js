
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world
var engine
function preload(){

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var obj4_options ={
	  restitution:0.5,
	  friction:0.02,
	  frictionAir:0,
	}

	var obj3_options ={
		restitution:0.7,
		friction:0.01,
		frictionAir:0,
	}

	var obj2_options ={
		restitution:0.7,
		friction:0.01,
		frictionAir:0,
	}

	var obj1_options ={
	restitution:0.01,
	friction:1,
	frictionAir:0.3
}
	obj1 = Bodies.rectangle(400,500,150,50,obj1_options)
	  World.add(world,obj1)

	Engine.run(engine);
  	obj2 = Bodies.rectangle(600,250,250,30,obj2_options)
	  World.add(world,obj2)
	obj3 = Bodies.rectangle(200,250,250,15,obj3_options)
	  World.add(world,obj3)

	obj4 = Bodies.circle(400,350,200,obj4_options)
	  World.add(world,obj4)
}	 


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER)
  background(0);
  
  drawSprites();
  ellipse(obj4.position.x,obj4.position.y,200,200)
  rect(obj3.position.x,obj3.position.y,250,20)
  rect(obj2.position.x,obj2.position.y,250,30)
  rect(obj1.position.x,obj1.position.y,150,50)
Engine.update(engine)

}



