var bg 
function preload() {
  bg = loadImage("snow1.jpg")
  img = loadImage("snow4.webp")
}

function setup() {
  createCanvas(1600,800);
 snow= createSprite(800, 400, 50, 50);
 snow.addImage(img)
 snow.scale=0.5
}

function draw() {
  background(bg);  
  drawSprites();
}