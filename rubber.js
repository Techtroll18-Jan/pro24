class Rubber {
    constructor(x, y,r) {
      var options = {
          'restitution':0.6,
          'friction':2.0,
          'density':1
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
      translate(rubberpos.x, rubberpos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("black")
      fill("blue")
      ellipse(0,0,this.r, this.r);
      pop();
    }
  };
  