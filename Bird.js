class Bird extends BaseClass
{
    constructor(x,y)
    {
        super(x,y, 50, 50);
        this.image = loadImage("sprites/bird.png");
        this.smokeImage = loadImage("sprites/smoke.png");
        this.trajectory = [];
    }

    display()
    {
        
        super.display();
        if(this.body.velocity.x>1 && this.body.position.x>204)
        {
            this.trajectory.push([this.body.position.x, this.body.position.y]);
        }
        for(var i=0; i < this.trajectory.length; i=i+1)
        {
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        }
    }
};
