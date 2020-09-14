var left, top, right;

function setup(){
    createCanvas(displayWidth, displayHeight);

    left = createSprite(5, displayHeight / 2, 10, displayHeight);
    top = createSprite(displayWidth/ 2, 5, displayWidth, 10);
    right = createSprite(displayWidth - 5, displayHeight / 2, 10, displayHeight);

}

function draw(){
    background(255, 255, 255);

    drawSprites();
}