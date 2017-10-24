var board = {

}



// snake
var snake = {
    snakeLength: 2,

    snakeMove : function (keyUp, keyDown, keyLeft, keyRight) {

    },

    snakeIncrease : function (value) {
        if(value) {
            this.snakeLength++;
        }
    },

    eatfood: function (value) {

    }
}

// food

var food = {
    foodAmount: 30,

    generateFood: function () {
        for( var i = 0; i > this.foodAmount; i++) {
            if(snake.eatfood()) {

            }
        }
    }
}