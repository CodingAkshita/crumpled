class dustbin{
constructor(x,y) {
this.x=x;
this.y=y;
this.dustbinWidth=130;
this.dustbinHeight=320;
this.wallThickness=0; 
this.angle=0;
this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
Matter.Body.setAngle(this.leftWallBody, this.angle); 
this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
this.image = loadImage("dustbingreen.png")
Matter.Body.setAngle(this.rightWallBody, -1*this.angle); 
World.add(world, this.bottomBody)
World.add(world, this.leftWallBody)
World.add(world, this.rightWallBody);
}

 
display(){
var posBottom=this.bottomBody.position;
var posLeft=this.leftWallBody.position;
var posRight=this.rightWallBody.position;



push() 
translate(posRight.x, posRight.y); 
imageMode(CENTER)
//strokeWeight(4);
//stroke(255)
angleMode(RADIANS) 
//fill(255)
rotate(-1*this.angle)
image(this.image,0,0,this.wallThickness, this.dustbinHeight);
pop()



}
  
}