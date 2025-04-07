var mouthX = 245;
var mouthY = 235;
var mouthDiameter1 = 30;
var mouthDiameter2 = 45;
var mouthDirection = 2;


var noseX = 245;
var noseY = 190;
var noseDirection = 1;

var hairX = 200;
var hairY = 110;
var hairDirection = 1;

var size = 30;
var count = 0;
var sizeDirection = 2;

var triangleX = 220;
var triangle2X = 250;
var triangle3X = 280;
var TriangleDirection1 = 1;
var TriangleDirection2 =1;
var TriangleDirection3 = 1;

var bodyX = 200;
var bodyY = 280;
var bodyDirection = 2;


function setup()
{
    createCanvas(600, 800);
}

function draw()
{
    background(0,100,0);
    textSize(size);
    size+= sizeDirection;
    count++;
    if (count > 3)
    {
        sizeDirection *=-3;
        count = 0;

    }
    text("I'm trying!", 10,80);

    // head
    fill(255, 255, 255);
    circle(250,200,210);
    triangle(triangleX,110,triangle2X,5,triangle3X,110);
    triangleX+= TriangleDirection1;
    triangle2X += TriangleDirection2;
    triangle3X += TriangleDirection3;
    if (triangleX >=150 || triangleX<=300)
    {
        TriangleDirection1 +=1;
    }
    if (triangle2X >=150|| triangle2X<=400)
        {
            TriangleDirection2 +=1;
        }
    if (triangle3X >=150 || triangle3X<=400)
        {
             TriangleDirection3 +=1;
        }    

   
    // eyes
    strokeWeight(10);
    fill(0,0,125);
    circle(200,175,20);
    circle(285,175,20);

    // nose
    point(noseX,noseY);
    noseX+=noseDirection;
    if (noseX >=500 || noseX<= 75)
    {
        noseDirection *= -1;
    }
    
    // mouth
    ellipse(245, mouthY, 30, 45);
    mouthY += mouthDirection;
    if (mouthY >=0 || mouthY <=75)
    {
        mouthY *= -1;
    }
    // alright, I could have made that move up and down but I really like the effect!

    // hair
    line(200,110,200,130);
    line(130,175,175,50);
    line(140,180,175,40);
    line(150,185,175,30);
    line(325,50,360,175);
    line(335,40,360,180);
    line(345,30,360,195);
    
    // body
    fill(155,0,0);
    rect(200,bodyY,100,150);
    bodyY += bodyDirection;
    if (bodyY <=150 || bodyY>= 500)
    {
        bodyDirection *= -1;
    }
    
    // decoration
    fill(255);
    
    // right arm
    fill(10, 24, 5);
    rect(300,295,50,10);
    // left arm
    rect(150,295,50,10);
    // left leg
    rect(200,435,10,50);
    // right leg
    rect(290,435,10,50);
    
    fill(255,255,255);
    textSize(30);
    text("Tammi Fladager",270,600 );


}