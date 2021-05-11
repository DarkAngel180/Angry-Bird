class Ground 
{
    constructor(x,y,width,height) 
    {
      var options = {'isStatic': true}
      this.bodyX = x;
      this.bodyY = y;
      this.bodyW = width;
      this.bodyH = height;
      this.body = Bodies.rectangle(this.bodyX, this.bodyY, this.bodyW, this.bodyH, options);
      World.add(world, this.body);
    }
    display()
    {
      rectMode(CENTER);
      fill("brown")
      rect(this.body.position.x, this.body.position.y, this.bodyW, this.bodyH);
    }
  };

