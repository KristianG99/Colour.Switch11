
function setup() {
  createCanvas(400,400);
box= createSprite (200,200,30,30)


}

function draw() 
{
  if (keyWentDown(RIGHT_ARROW)){
    background ("blue")
  }
   
  
    if (keyWentDown(LEFT_ARROW)){
      background("red")
    }
   

  background("yellow");
drawSprites ()
}




