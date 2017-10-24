//start game

var startGame = {

    pressStart: function () {
       addEventListener('keypress', function (event) {
            if(event.keyCode == 32) {
                createSnake.init();
            }
        })
    }
};

startGame.pressStart();

//GameOver

var endGame = {

};


var board = {
    field: document.querySelector('.field'),

};




// snake

function Snake(snakeLength, snakeStep) {
    this.snakeLength = snakeLength;
    this.snakeStep = snakeStep;
}

Snake.prototype.snakeIncrease = function (value) {

    if(value) {
        this.snakeLength++;
    }
};

Snake.prototype.eatfood = function (value) {

};

Snake.prototype.changeStep = function() {
    var elem = document.querySelector('.snake');
    createSnake.snakeStep += 30;
    elem.style.top = createSnake.snakeStep + 'px';
};

Snake.prototype.init = function() {
    setInterval(this.changeStep, 70);
};

var createSnake = new Snake(2, 30);

console.log(createSnake);


/*var snake = {
    snakeLength: 2,
    snakeStep: 30,


    snakeMove: function () {
        var elem = document.querySelector('.snake');
        this.snakeStep += 30;
        debugger;
        console.log(this.snakeStep);
        elem.style.top += this.snakeStep + 'px';

    },

    snakeMoveDirection: function (keyUp, keyDown, keyLeft, keyRight) {

    },

    snakeIncrease : function (value) {
        if(value) {
            this.snakeLength++;
        }
    },

    eatfood: function (value) {

    },

    init: function() {
        setInterval(this.snakeMove, 50);
    }

};*/

// food

var food = {
    foodAmount: 30,
    posX: 0,
    posY: 0,

    createFood: function () {
        var div = document.createElement('div');
        div.className = 'food';
        board.field.appendChild(div);
    },

    generateFoodPos: function () {
        this.posX = Math.floor(Math.random() * 780);
        this.posY = Math.floor(Math.random() * 780);
    },

     addFoodPos: function () {
         var elem = document.querySelector('.food');
         console.log(elem);
         elem.style.top = this.posY + 'px';
         elem.style.left = this.posX + 'px';
    }

};



food.createFood();
food.generateFoodPos();
food.addFoodPos();










