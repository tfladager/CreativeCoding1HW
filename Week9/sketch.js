function setup()
{
    createCanvas(600, 800);
}

function draw()
{
    background(0,100,0);
    textSize(30)
    text("I'm trying!", 10,80);

    // head
    fill(255, 255, 255);
    circle(250,200,210);
    triangle(220,110,250,5,280,110)
   
    // eyes
    strokeWeight(10);
    fill(0,0,125);
    circle(200,175,20);
    circle(285,175,20);

    // nose
    point(245,190);
    
    // mouth
    ellipse(245, 235, 30, 45)

    // hair
    line(200,110,200,130)
    line(130,175,175,50);
    line(140,180,175,40);
    line(150,185,175,30);
    line(325,50,360,175);
    line(335,40,360,180);
    line(345,30,360,195);
    
    // body
    fill(155,0,0);
    rect(200,285,100,150);
    
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