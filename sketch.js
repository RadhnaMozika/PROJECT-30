
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2, polygon, slingshot1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16, box17, box18, box19;
var box20, box21, box22, box23, box24, box25; 
var box26, box27, box28, box29, box30;
var box31, box32, box33;
var box34;
var polygon_image;

function preload(){
    polygon_image=loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(1300, 550);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(600, 450, 500, 10);
    stand2 = new Ground(1075, 250, 300, 10);

    polygon = Bodies.circle(150, 200, 20)
    World.add(world, polygon);

    slingshot1 = new SlingShot(this.polygon, {x:150, y:200});

    //level 1, structure 1
    box1 = new Box(400, 420, 50, 50);
    box2 = new Box(450, 420, 50, 50);
    box3 = new Box(500, 420, 50, 50);
    box4 = new Box(550, 420, 50, 50);
    box5 = new Box(600, 420, 50, 50);
    box6 = new Box(650, 420, 50, 50);
    box7 = new Box(700, 420, 50, 50);
    box8 = new Box(750, 420, 50, 50);
    box9 = new Box(800, 420, 50, 50);
    
    //level 2, structure 1
    box10 = new Box(450, 360, 50, 50);
    box11 = new Box(500, 360, 50, 50);
    box12 = new Box(550, 360, 50, 50);
    box13 = new Box(600, 360, 50, 50);
    box14 = new Box(650, 360, 50, 50);
    box15 = new Box(700, 360, 50, 50);
    box16 = new Box(750, 360, 50, 50);

    //level 3, structure 1
    box17 = new Box(500, 320, 50, 50);
    box18 = new Box(550, 320, 50, 50);
    box19 = new Box(600, 320, 50, 50);
    box20 = new Box(650, 320, 50, 50);
    box21 = new Box(700, 320, 50, 50);
 
    //level 4, structure 1
    box22 = new Box(550, 260, 50, 50);
    box23 = new Box(600, 260, 50, 50);
    box24 = new Box(650, 260, 50, 50);

    //level 5, structure 1
    box25 = new Box(600, 220, 50, 50);

    //level 1, structure 2
    box26 = new Box(975, 220, 50, 50);
    box27 = new Box(1025, 220, 50, 50);
    box28 = new Box(1075, 220, 50, 50);
    box29 = new Box(1125, 220, 50, 50);
    box30 = new Box(1175, 220, 50, 50);

    //level 2, structure 2
    box31 = new Box(1025, 160, 50, 50);
    box32 = new Box(1075, 160, 50, 50);
    box33 = new Box(1125, 160, 50, 50);

    //level 3, structure 2
    box34 = new Box(1075, 140, 50, 50);

}


function draw(){
    background(0);
    Engine.update(engine);
    
    //displaying game instrcutions
    
    textFont("Harrington");
    textSize(25);
    fill("#FFFFFF")
    text("DRAG  THE  HEXAGON  AND  RELEASE  IT", 10, 30);
    text("PRESS  SPACE  TO  TRY  AGAIN", 60, 60);

    //displaying image for polygon
    imageMode(CENTER);
    image(polygon_image, polygon.position.x, polygon.position.y, 60, 60)

    //displaying stands
    rectMode(CENTER);
    stand1.display();
    stand2.display();

    slingshot1.display()

    //level 1, structure 1
    box1.display("#051F63");
    box2.display("#051F63");
    box3.display("#051F63");
    box4.display("#051F63");
    box5.display("#051F63");
    box6.display("#051F63");
    box7.display("#051F63");
    box8.display("#051F63");
    box9.display("#051F63");

    //level 2, structure 1
    box10.display("#02377A");
    box11.display("#02377A");
    box12.display("#02377A");
    box13.display("#02377A");
    box14.display("#02377A");
    box15.display("#02377A");
    box16.display("#02377A");

    //level 3, structure 1
    box17.display("#1F71A7");
    box18.display("#1F71A7");
    box19.display("#1F71A7");
    box20.display("#1F71A7");
    box21.display("#1F71A7");

    //level 4, structure 1
    box22.display("#2792BA");
    box23.display("#2792BA");
    box24.display("#2792BA");

    //level 5, structure 1
    box25.display("#2CABD3");

    //level 1, structure 2
    box26.display("#02377A");
    box27.display("#02377A");
    box28.display("#02377A");
    box29.display("#02377A");
    box30.display("#02377A");

    //level 2, structure 2
    box31.display("#1F71A7");
    box32.display("#1F71A7");
    box33.display("#1F71A7");

    //level 3, structure 2
    box34.display("#2792BA");


    drawSprites();   
}

function keyPressed(){
    if(keyCode === 32){
    slingshot1.attach(this.polygon);
    }
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot1.fly();
}
