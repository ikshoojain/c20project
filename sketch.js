
var r = 0;
var g = 50;
var b=255;


// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
  r = createSprite()
}


function draw(){
background(r,g,b)
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis
r = map(mouseX,0,1200,0,255)
g = map(mouseX,200,800,0,80)
b = map(mouseX,400,1200,50,200)
  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  ellipse(mouseX, mouseY,50,50)
  
  // Remember to fill the canvas with white paint before creating the ellipse.
}