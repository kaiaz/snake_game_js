//start game

var startGame = {

};

//GameOver

var endGame = {

};


var board = {
    field: document.querySelector('.field'),

};




// snake
var snake = {
    snakeLength: 2,



    snakeMove: function () {
        var elem = document.querySelector('.snake');

    },

    snakeMoveDirection: function (keyUp, keyDown, keyLeft, keyRight) {

    },

    snakeIncrease : function (value) {
        if(value) {
            this.snakeLength++;
        }
    },

    eatfood: function (value) {

    }
};

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


