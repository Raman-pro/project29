class BaseClass{
    constructor(x, y, wid, heig, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, wid, heig, options);
        this.width = wid;
        this.height = heig;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
          fill("green")
          push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}