var playerX = 50;
    var playerY = 75;
    var playerDirection = 10;

    var w = 87;
    var s = 83;
    var a = 65;
    var d = 68;
    
    var planetX = 150;
    var planetY = 500;
    var planetDirection = 1;
    var planetXSpeed;
    var planetYSpeed;

    var rockX = 230;
    var rockY = 275;
    var rock2X = 290;
    var rock2Y = 330;
    var rock3X = 286;
    var rock3Y = 275;
    var rockDirection = 1;
    var rockXSpeed;
    var rockYSpeed;
    
    var clickShapeX = 100;
    var clickShapeY = 125;

    function setup()
{
    createCanvas(800,600);   
}       
     
function draw()  
{  
   
    //player
        background (0,200,10);
        fill(240,100,190);
        circle(playerX,playerY,75);    
 if(playerX >730 && playerY> 450)
   {
     fill (200,10,10);
     stroke(3);
     textSize(30);
     text('Winner!',300,400);
   }
  
    //planet
        fill(200);
        square(planetX,planetY,75);
      if(planetX >=800 || planetX<=0)
        {
          planetDirection*=-1;
        }
          planetX += planetDirection;
  
      if(planetY >=550 || planetY<=0)
        {
          planetDirection*=-1;
        }
          planetY += planetDirection;
   
    //rock
        fill(13)
           triangle(rockX,rockY,rock2X,rock2Y,rock3X,rock3Y )
      if(rockX >=800 || rockX<=0)
        {
          rockDirection*=-1;
        }
          rockX += rockDirection;
  
      if(rockY >=600 || rockY<=0)
        {
          rockDirection*=-1;
        }
          rockY += rockDirection;
  
      if(rock2X >=800 || rock2X<=0)
        {
          rockDirection*=-1;
        }
          rock2X += rockDirection;
  
      if(rock2Y >=600 || rock2Y<=0)
        {
          rockDirection*=-1;
        }
          rock2Y += rockDirection;
  
      if(rock3X >=800 || rock3X<=0)
        {
          rockDirection*=-1;
        }
          rock3X += rockDirection;
  
      if(rock3Y >=600 || rock3Y<=0)
        {
          rockDirection*=-1;
        }
          rock3Y += rockDirection;
  
   //click to obstacle
    fill(0,222,13);
    square(clickShapeX, clickShapeY,100);
  
  //sign for exit
  fill(100);
  line(730,320,785,375);
  
  fill(100);
  line(730,450,785,400);
  
  fill(222);
  textSize(50);
  text('Exit',640,320); 
      
  
}

function keyPressed() 
  {
  if (key == 'd') 
  {
    playerX+=15;
  } 
  else if (key == 'a') 
  {
    playerX-=15;
  }
  if (key == 'w') 
  {
    playerY+=15;
  } 
  else if (key == 's') 
  {
    playerY-=15;
  }
    
function mouseClicked()
    {
      clickShapeX = mouseX;
      clickShapeY = mouseY;
    }
  
  
}


