class Slingshot
{
    constructor(b1, p2)
    {
    var options = {'bodyA': b1, 'pointB': p2, 'stiffness': 0.03, 'length': 10}
    this.sling1 = loadImage("sprites/sling1.png");
    this.sling2 = loadImage("sprites/sling2.png");
    this.sling3 = loadImage("sprites/sling3.png");
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
    }

    attach(body)
    {
     this.sling.bodyA = body;
    }

    fly()
   {
      this.sling.bodyA = null;
   }

    display()
   {
    image(this.sling1, 200, 10);
    image(this.sling2, 170, 10);
    if(this.sling.bodyA)
    {
        strokeWeight(3);
        if(this.sling.bodyA.position.x < 220)
        {
         line(this.sling.bodyA.position.x - 20, this.sling.bodyA.position.y, this.sling.pointB.x - 10, this.sling.pointB.y);
         line(this.sling.bodyA.position.x - 20, this.sling.bodyA.position.y, this.sling.pointB.x + 25, this.sling.pointB.y);
         image(this.sling3, this.sling.bodyA.position.x - 30, this.sling.bodyA.position.y - 10, 15, 30);
        }
       else
       {
         line(this.sling.bodyA.position.x + 25, this.sling.bodyA.position.y, this.sling.pointB.x - 10, this.sling.pointB.y);
         line(this.sling.bodyA.position.x + 25, this.sling.bodyA.position.y, this.sling.pointB.x + 25, this.sling.pointB.y);
         image(this.sling3, this.sling.bodyA.position.x + 25, this.sling.bodyA.position.y - 10, 15, 30);
       }      
    }
   }
}