class box {
constructor(20,50,200,500);
{
this.Visibility = 255;
restitution = 0.5,
}
 display()
 {
    World.remove(world, this.body);
    push();
    tint(255,this.Visibility);
    image( this.body.position.x, this.body.position.y, 50, 50);
     pop();
 }
}