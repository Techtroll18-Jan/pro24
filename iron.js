class Iron {
    constructor(x, y) {
      var options = {
          'restitution':1.4,
          'friction':0.3,
          'density':2,
      }
      this.body = Bodies.rectangle(x, y, 56, 56, options);
      this.width = 90;
      this.height = 45;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("green")
      fill("white")
      rect(0, 0, this.width, this.height);
      pop();
    }
  };