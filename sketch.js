var fixrect, movrect

function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  movrect=createSprite(200, 200, 60, 40);
}

function draw() {
  background("black");  
  movrect.x=World.mouseX
  movrect.y=World.mouseY
  if (movrect.x-fixrect.x<movrect.width/2+fixrect.width/2 && fixrect.x-movrect.x<movrect.width/2+fixrect.width/2
    && movrect.y-fixrect.y<movrect.height/2+fixrect.height/2 && fixrect.y-movrect.y<movrect.height/2+fixrect.height/2){
    movrect.shapeColor="red"
    fixrect.shapeColor="yellow"
  }
  else {
    movrect.shapeColor="grey"
    fixrect.shapeColor="grey"
  }
  drawSprites();
}