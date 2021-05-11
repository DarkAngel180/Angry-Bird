class Pig extends BaseClass
{
    constructor(x,y)
    {
        super(x,y, 50, 50);
        this.image = loadImage("sprites/enemy.png");
        this.remove = false;
        this.visibility = 255;
    }

    display()
    {
        //console.log(this.body.speed);
        if(this.body.speed<3)
        {
            super.display();
        }
        else
        {
            if(this.remove === false)
           {
            World.remove(world, this.body);
            this.remove = true;
            score = score + 50;
            push()
            this.visibility = this.visibility -5;
            tint(255, this.visibility);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            pop();
           }
        }
    }

};

