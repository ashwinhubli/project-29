const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1D, pig1;
var backgroundImg,platform;
var bird, slingShot;
var polygon;
var hexagonimg;
function preload() {
     hexagonimg = loadImage("sprites/hexagon.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(500,470,500,20);
   
    box1AD = new Box2(325,390,60,70);
    box2AD = new Box2(390,390,60,70);
    box3AD = new Box2(455,390,60,70);
    box4AD = new Box2(520,390,60,70);
    box5AD = new Box2(585,390,60,70);
    box6AD = new Box2(650,390,60,70); 
    box7AD = new Box2(715,390,60,70);


    box1D = new Block(390,360,60,70);
    box2D = new Block(455,360,60,70);
    box3D = new Block(520,360,60,70);
    box4D = new Block(585,360,60,70);
    box5D = new Block(650,360,60,70);
    //box6D = new Box(770,320,60,70);
    
    box1M = new Box(455,292,60,70);
    box2M = new Box(519.9,292,60,70);
    box3M = new Box(585,292,60,70);

   box1DL = new Blox(490,180,60,70);
    box2DL = new Blox(555,180,60,70);

    boxDN = new Box2(520,100,60,70);




    ground2 = new Ground(1000,335,500,20);
    box1U = new Block(800,255,60,70);
    box2U = new Block(865,255,60,70);
    box3U = new Block(930,255,60,70);
    box4U = new Block(995,255,60,70);
    box5U = new Block(1060,255,60,70);
    //box6U = new Box(1150,125,60,70)

    box1UN = new Box(865,145,60,70);
    box2UN = new Box(930,145,60,70);
    box3UN = new Box(995,145,60,70);
   
   box1UD = new Blox(897,85,60,70);
   box2UD = new Blox(962,85,60,70);

   box1DU = new Box2(929,0,60,70);
box = new Box2(200,0,50,50);
ground = new Ground(600,550,1200,4);

    bird = new Polygon(400,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(44,22,8);
    Engine.update(engine);
    strokeWeight(4);
    
    
    ground1.display();
    ground2.display();
    ground.display();

   box1AD.display();
   box2AD.display();
   box3AD.display();
   box4AD.display();
   box5AD.display();
   box6AD.display();
   box7AD.display();

    box1D.display();
    box2D.display();
    box3D.display();
    box4D.display();
    box5D.display();
    //box6D.display();    


    box1U.display();
    box2U.display();
    box3U.display();
    box4U.display();
    box5U.display();
    //box6U.display();    

    box1UN.display();
    box2UN.display();
    box3UN.display();
    //box4UN.display();
   
   // box5UN.display();
    
    box1M.display();
    box2M.display();
    box3M.display();

    box1DL.display();
    box2DL.display();
box1UD.display();
box2UD.display();
boxDN.display();
box1DU.display();
    bird.display();
    slingshot.display();
 }

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
