const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render=Matter.Render;
const Body = Matter.Body;
var b1,b2,b3,ball,ground,bI,pI;
var no = 0;

function setup() {
	createCanvas(800, 700);

	 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 = new Bin(600, height-10, 200, 10, {isStatic: true});
	b2 = new Bin(675, height-50, 10, 75, {isStatic: true});
	b3 = new Bin(600, height-50, 10, 75, {isStatic: true});
	ball = new Ball(50,600,20);
	ground = new Ground(width/2, height-10, 800, 5, {isStatic: true});
	
	Engine.run(engine);
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1000, height: 700, wireframes: false } }); Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(255);
  //b1.show();
  //b2.show();
  //b3.show();
  ball.display();
 // ground.present();
  drawSprites();
  console.log(b1.width, b1.height);
 // image(pI, 80, 90);
  image(bI, 600, 620, 60, 80,);
}

function keyPressed() {
	if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball.body, ball.body.position, {x: 12, y: -8});
		no = 1;
	}
	// if(keyCode === DOWN_ARROW){
    //     Matter.Body.applyForce(ball.body, ball.body.position, {x: -8, y: -8});
	// }
}

function preload(){
	//pI=loadImage("paper.png");
	bI=loadImage("dustbingreen.png");
}