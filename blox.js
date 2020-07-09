class Blox{
    constructor(x,y,width,height) {
      var options = {
          'isStatic': false,
          'restitution':0.5,
          'friction':1.0,
          'density':0.1
  
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(111,255,112);
      stroke('black');
      strokeWeight(5);
      rect(pos.x, pos.y, this.width, this.height);
    }
  }