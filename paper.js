class Paper {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0.4,
         friction:1.0,
          density:1.2
      }
      this.body = Bodies.circle(x,y,r/2,options);
      this.r = r;
      
      World.add(world, this.body);
    }
    display(){
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(this.body.position.x, this.body.position.y,this.r,this.r);
    }

    
  };