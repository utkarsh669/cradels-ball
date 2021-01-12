
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var ball,ball2,ball3,ball4,ball5;
var rope,roof,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;


	ground = new Ground(600,height,1200,20);
	roof= new Ground (250,300,310,40)
	ball = new Ball(340,600,60,60)
	ball2= new Ball(380,600,60,60)
	ball3=new Ball(240,600,60,60)
	ball4=new Ball(290,600,60,60)
	ball5=new Ball(190,600,60,60)
	rope = new Chain(ball.body,{x:320,y:320})
	rope2=new Chain (ball2.body,{x:370,y:320})
	rope3=new Chain (ball3.body,{x:220,y:320})
	rope4=new Chain (ball4.body,{x:270,y:320})
	rope5=new Chain (ball5.body,{x:170,y:320})

	


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  ground.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}
function keyPressed() {
	if(keyCode === DOWN_ARROW){
	
	Matter.Body.applyForce(ball5.body,ball5.body.position,{x:-120,y:-110});

	}
}



