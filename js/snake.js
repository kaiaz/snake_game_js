function Snake(snakeLength, snakeStepX, snakeStepY) {
    this.snake = document.querySelector('.snake');
    this.snakeLength = snakeLength;
    this.snakeStepX = snakeStepX;
    this.snakeStepY = snakeStepY;
    this.snakeDirection = -1;
    this.snakeX = 0;
    this.snakeY = 0;
}

Snake.prototype.snakeIncrease = function (value) {

    if(value) {
        this.snakeLength++;
    }
};

Snake.prototype.eatfood = function () {

    var snake = document.querySelector('.snake_part-1');
    var headY = snake.offsetParent.offsetTop + currentCount;
    var headX = snake.offsetParent.offsetLeft;

    if((food.posX === headX ) && (food.posY === headY)) {

        var eatedFood = document.querySelector('.food');
        eatedFood.remove();
        createSnake.snakeGrowing();
        counter();
        food.creareNewfood();
        createSnake.snakeLength++;
    }

};

Snake.prototype.snakeGrowing = function () {
    var div = document.createElement('div');
    div.className = 'snake_part';
    createSnake.snake.insertBefore(div,  createSnake.snake.firstElementChild);
}

Snake.prototype.changeStep = function() {

    var elem = document.querySelector('.snake');

    switch (createSnake.snakeDirection) {
        case 1:
            createSnake.snakeStepY -= 30;
            elem.style.top = createSnake.snakeStepY + 'px';
            createSnake.snakeY -= 30;
            break;
        case -1:
            createSnake.snakeStepY += 30;
            elem.style.top = createSnake.snakeStepY + 'px';
            createSnake.snakeY += 30;
            break;
        case -2:
            createSnake.snakeStepX -= 30;
            elem.style.left = createSnake.snakeStepX + 'px';
            createSnake.snakeX -= 30;
            break;
        case 2:
            createSnake.snakeStepX += 30;
            elem.style.left = createSnake.snakeStepX + 'px';
            createSnake.snakeX += 30;
            break;
    }
    createSnake.eatfood();
};

Snake.prototype.init = function() {
    setInterval(this.changeStep, 500);
};

Snake.prototype.keyListener = function() {
    window.addEventListener('keypress', function (e) {
        // debugger;
        if(e.keyCode === 115) {
            createSnake.snakeDirection = -1;
            /*alert(createSnake.snakeDirection);*/
        } else if (e.keyCode === 119) {
            createSnake.snakeDirection = 1;
            /*alert(createSnake.snakeDirection);*/
        } else if(e.keyCode === 97) {
            createSnake.snakeDirection = -2;
            /*alert(createSnake.snakeDirection);*/
        } else if(e.keyCode === 100) {
            createSnake.snakeDirection = 2;
            /*alert(createSnake.snakeDirection);*/
        }
    });
};

var createSnake = new Snake(2, 30, 30);
