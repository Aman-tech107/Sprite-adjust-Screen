var left, top, right;

function setup(){
    createCanvas(displayWidth, displayHeight);

    left = createSprite(5, displayHeight / 2, 10, displayHeight);
    top = createSprite(displayWidth/ 2, 5, displayWidth, 10);
    right = createSprite(displayWidth - 5, displayHeight / 2, 10, displayHeight);
    between = createSprite(50, 100, 20, 400);

}

function draw(){
    background(255, 255, 255);

    drawSprites();
}