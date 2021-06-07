class Paper 
{
  constructor(x, y,radius) 
  {
    var options = 
    {
        'restitution':0.8,
        'friction':0.3,
        'density':1.2
    }
    this.body = Bodies.circle(x,y,50, options);
    this.width =33;
    this.image = loadImage("paper.png");
    World.add(world, this.body);
  }
  display()
  {
    var pos = this.body.position;
    var angle = this.body.angle;
    fill("white");
    rotate(angle);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,33,33);
  }
};
