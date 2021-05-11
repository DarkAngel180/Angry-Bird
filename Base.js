class BaseClass
{
    constructor(x,y, width, height, angle)
    {
        var options = {'restitution' : 0.8, 'friction': 0.8}
        this.bodyX = x;
        this.bodyY = y;
        this.bodyW = width;
        this.bodyH = height;
        this.bodyA = angle;
        this.image = loadImage("sprites/base.png");
        this.body = Bodies.rectangle(this.bodyX, this.bodyY, this.bodyW, this.bodyH, options);
        World.add(world,this.body);
    }

    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.bodyW, this.bodyH);
        pop();     
    }
};

