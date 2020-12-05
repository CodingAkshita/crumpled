class Paper{

constructor(x,y,r)
{
  var options = {
   isStatic:false,
   restitution:0.7,
   friction:0.5,
   density:1.2
  }

  this.x = x;
  this.y = y;
  this.r = 70;
  this.body = Bodies.circle(this.x,this.y,70,options);
  this.image = loadImage("paper.png");
  World.add(world, this.body);

}
display()

{
    var Paperpos = this.body.position;

    push();
    translate(Paperpos.x,Paperpos.y);
    imageMode(CENTER);
    image(this.image,0,45,70,70);
    pop();


}
}