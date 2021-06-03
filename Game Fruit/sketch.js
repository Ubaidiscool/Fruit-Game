const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var knife
var fruits = []

function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

    knife = new Knife (200,200,10,10)
    

    
}

function draw(){
     background("brown");
   
    knife.x = World.mouseX
    knife.y = World.mouseY
    knife.display() 
    
    Engine.update(engine);
    
    spawnFruits()
    spawnBombs()
}

function spawnFruits(){
    if (frameRate%100 === 0){
        fruits[i]=new Fruits(200,200) 
        fruits[i].display()
    }
}

function spawnBombs(){
    if (frameRate%100 === 0){
        bombs[i]=new Bomb(200,200) 
        bombs[i].display()
    }
}