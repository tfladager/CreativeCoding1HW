function setup (){
    createCanvas (400, 400);
}

function draw () {
    if (mouseIsPressed) {
        fill (0);
    } else {
        fill (255);
    }
    elippse (mouseX, mouseY, 80, 80);
}