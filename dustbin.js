class Dustbin 
{
    constructor(x, y, width, height) 
    {
      var options = 
      {
          isStatic:true,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png")
      World.add(world, this.body);
    }
    display()
    {
      image(this.image,800,580,250,220)
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("purple");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  