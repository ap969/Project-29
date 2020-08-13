var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var polygon;
var sling;
var ground1;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ground1 = new Ground(400, height, 800, 20);
  block1 = new Block(350,350,30,40);
  block2 = new Block(380,350,30,40);
  block3 = new Block(410,350.30,40);
  block4 = new Block(440,350,30,40);
  block5 = new Block(365,390,30,40);
  block6 = new Block(380,390,30,40);
  block7 = new Block(395,390,30,40);
  block8 = new Block(380,430,30,40);
  block9 = new Block(395,430,30,40);
  sling = new SlingShot(this.polygon,{x:50,y:200});
  polygon = Bodies.circle(50,200,20)
  World.add(world,polygon);


}

function draw() {
  background(255,255,255);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  ground1.display();
  sling.display();

  drawSprites();
}