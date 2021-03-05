class Sand {
    constructor(x, y,r) {
      var options = {
          'restitution':1.0,
          'friction':0.4,
          'density':2.0
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(sandpos.x, sandpos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("black")
      fill("red")
      ellipse(0,0,this.r, this.r)
      pop();
    }
  };
  