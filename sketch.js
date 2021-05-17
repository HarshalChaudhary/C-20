 var a,b


function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  a.shapeColor="brown";
  a.debug=true

  b=createSprite(400, 200, 100, 50);
  b.shapeColor="brown";
  b.debug=true
}

function draw() {
  background("grey"); 
  b.x=mouseX
  b.y=mouseY
  console.log(b.x-a.x)
if(b.x-a.x<b.width/2+a.width/2
  && a.x-b.x<b.width/2+a.width/2
  && b.y-a.y<b.height/2+a.height/2
  && a.y-b.y<b.height/2+a.height/2){
  a.shapeColor="green";
  b.shapeColor="green";
}
else{
  a.shapeColor="brown";
  b.shapeColor="brown";
}

  drawSprites();
}