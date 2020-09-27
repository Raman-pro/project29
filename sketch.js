const Engine = Matter.Engine;
World = Matter.World;
Bodies = Matter.Bodies;
Constraint = Matter.Constraint;

let engine, world;
let Shooter1,
    polygon = [],
    polygonSpaceLine = [],
    bottomGround,
    slingShot2

function setup() {
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    bottomGround = new Ground(380,390,1200,15)
    for(let i = 0; i <=1;i++){
        let x = i===0?400:700
        let y = i===0?260:180
        polygonSpaceLine.push(new Ground(x,y,200,15))
    }
    Shooter1=new Shooter(110,220,50)
    slingShot2=new SlingShot(Shooter1.body,{x:110,y:220})
    //lower and frist line
    polygon.push(new Box(405,258,50,50))
    polygon.push(new Box(405,258,50,50))
    polygon.push(new Box(400,258,50,50))
    polygon.push(new Box(410,258,50,50))
    //next line
    polygon.push(new Box(710,175,50,50))
    polygon.push(new Box(710,175,50,50))
    polygon.push(new Box(705,175,50,50))
    polygon.push(new Box(715,175,50,50))
    Engine.run(engine)
}

function draw() {
    background(0);
    Engine.update(engine)
    bottomGround.display()
    polygonSpaceLine.forEach(polygonLine=>{
        polygonLine.display()
    })
    polygon.forEach(poly=>{
        poly.display()
    })
    Shooter1.display()
}
function mouseDragged(){
    Matter.Body.setPosition(Shooter1.body, {x: mouseX , y: mouseY});
}
function mouseReleased() {

    slingShot2.fly()
}