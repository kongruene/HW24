class Ball{
    constructor(x,y,r,options){
        var options={
            'restitution':0.6,
            'friction':0,
            'density':0.8,
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,r/2,options);
        World.add(world,this.body);

        this.image = loadImage("paper.png");
    }
    display(){
var pos = this.body.position;
push();
//translate(pos.x, pos.y);
rectMode(CENTER);
fill("red");
image(this.image, pos.x, pos.y, 25+5, 25+5);
//ellipse(pos.x, pos.y, this.r, this.r);
pop();
    }
}