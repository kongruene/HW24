class Bin{
    constructor(x,y,w,h,o){
var o={
    isStatic: true
}

this.image = loadImage("dustbingreen.png")

this.x = x;
this.y = y;
this.width = w;
this.height = h;
this.body = Bodies.rectangle(x,y,w,h,o);
World.add(world,this.body);
}
    show(){

     var pos = this.body.position;  

     push();
     rectMode(CENTER);
     noStroke();
     fill(70);
     image(this.image, pos.x, pos.y, this.width, this.height);
    // rect(pos.x,pos.y,this.width,this.height);
     pop();   
    }
}