function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(120,45,78);
    textSize(22)
    text("I'm trying!", 10,80);

    // head
    fill(255, 204, 0);
    circle(250,100,175);
   
    // eyes
    strokeWeight(10);
    fill(0);
    point(200,75);
    point(285,75);

    // nose
    point(245,90);
    
    // mouth
    ellipse(245, 135, 30, 45)

    // hair
    line(130,175,175,50);
    line(140,180,175,60);
    line(150,185,175,70);
    line(325,50,360,175);
    line(325,55,360,180);
    line(325,56,360,185);
    // body
    fill(10, 24, 120);
    rect(200,185,100,150);
    
    // decoration
    fill(255);
    triangle(220,320,250,220,280,320)
    // right arm
    fill(10, 24, 120);
    rect(300,195,50,10);
    // left arm
    rect(150,195,50,10);
    // left leg
    rect(200,335,10,50);
    // right leg
    rect(290,335,10,50);
    
    fill(140);
    textSize(30);
    text("Tammi Fladager",270,500 );


}