class Box {
  constructor(x,y,width,height) {
    var options = {
        'isStatic': false,
        'restitution':0.8,
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
    fill(91,211,255);
    stroke('black');
    strokeWeight(5);
    rect(pos.x, pos.y, this.width, this.height);
  }
}
  


