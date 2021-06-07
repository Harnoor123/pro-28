const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const  Constraint = Matter.Constraint;
var D1,D2,D3,paper,ground;
var slingshot;

function preload(){
}

function setup() 
{
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(600,height,1200,20);
	D1= new Dustbin(800,680,200,20);
    D2=new Dustbin(700,615,20,150);
    D3=new Dustbin(900,615,20,150);
    paper= new Paper (100,600,50);
    sling= new SlingShot(paper.body,{x:235,y:420})
  }

function draw() 
{
 background("lightblue");
 drawSprites();
 paper.display();
 ground.display();
 D1.display();
 D2.display();
 D3.display();
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

