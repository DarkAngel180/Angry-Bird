const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5;
var ground, pig1, pig2, log1, log2, log3, log4;
var bird, platform;
var bgImage, slingshot;
var score = 0;

var arr1 = [10, 20, 30, 40, 50];
console.log(arr1);
console.log(arr1[4]);
arr1.push(100);
arr1.pop;

var arr2 = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];
console.log(arr2);
console.log(arr2[1][2]);
arr2.push([100, 120, 130]);
arr2.pop;

function preload()
{
    //bgImage = loadImage("sprites/bg.png");
    getTime();
}

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(700, 320, 70, 70);   
    box2=new Box(920, 320, 70, 70);
    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920,240, 70, 70);
    box5 = new Box(810, 160, 70, 70);

    pig1=new Pig(810, 320);
    pig2 = new Pig(810, 240);

   

    log1=new Log(810, 260, 320, PI/2);
    log2=new Log(810, 180, 320, PI/2);
    log3=new Log(760, 120, 165, PI/6);
    log4 = new Log(870, 120, 165, -PI/5)

    bird = new Bird(205, 40);

    ground= new Ground(600, height, 1200, 20);   
    platform = new Ground(150, 300, 300, 180);
    slingshot = new Slingshot(bird.body, {x: 205, y: 40});
}

function draw()
{
    if(bgImage)    
    {
        background(bgImage);
    }

    textSize(20);
    fill("maroon");
    text("Score: " + score, width - 250, 50);


    text(mouseX + ","+ mouseY, 50,50);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    platform.display();
    log4.display();
    bird.display();
    slingshot.display();
}

function mouseDragged()
{
    Matter.Body.setPosition(bird.body, {x: mouseX, y:mouseY});
}

function mouseReleased()
{
    slingshot.fly();
}
 
function keyPressed()
{
 if(keyCode === 32)
   {
    bird.trajectory = [];
    Matter.Body.setPosition(bird.body, {x: 205, y: 40});
    slingshot.attach(bird.body);
    }
}

async function getTime()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
    console.log(responseJSON.datetime);
 
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);
    console.log(hour);    

    if(hour>=05 && hour<=18)
    {
        bgImage = loadImage("sprites/bg1.png");
    }
    else
    {
        bgImage = loadImage("sprites/bg2.jpg");
    }
}
