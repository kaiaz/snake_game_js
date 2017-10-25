//start game

var startGame = {

    pressStart: function () {
       window.addEventListener('keypress', function (event) {
            if(event.keyCode === 32) {
                createSnake.init();
                
            }
        });
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
    this.snakeDirection = -1;
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

    switch (createSnake.snakeDirection) {
        case 1:
            createSnake.snakeStep -= 30;
            elem.style.top = createSnake.snakeStep + 'px';
            break;
        case -1:
            createSnake.snakeStep += 30;
            elem.style.top = createSnake.snakeStep + 'px';
            break;
        case -2:
            createSnake.snakeStep -= 30;
            elem.style.left = createSnake.snakeStep + 'px';
            break;
        case 2:
            createSnake.snakeStep += 30;
            elem.style.left = createSnake.snakeStep + 'px';
            break;
    }
};

Snake.prototype.init = function() {
    setInterval(this.changeStep, 200);
};

Snake.prototype.keyListener = function() {
    window.addEventListener('keypress', function (e) {
        debugger;
        if(e.keyCode === 115) {
            createSnake.snakeDirection = -1;
            alert(createSnake.snakeDirection);
        } else if (e.keyCode === 119) {
            createSnake.snakeDirection = 1;
            alert(createSnake.snakeDirection);
        } else if(e.keyCode === 97) {
            createSnake.snakeDirection = -2;
            alert(createSnake.snakeDirection);
        } else if(e.keyCode === 100) {
            createSnake.snakeDirection = 2;
            alert(createSnake.snakeDirection);
        }
    });
};

var createSnake = new Snake(2, 30);

createSnake.keyListener();



// snake control

// function SnakeKeyMap() {
//
//     this.snakeUp = 38;
//     this.snakeDown = 40;
//     this.snakeLeft = 37;
//     this.snakeRight = 39;
//     this.currentKey = 12;
// }
//
// SnakeKeyMap.prototype.snakeControl = function () {
//
// };
//
// SnakeKeyMap.prototype.moveSnakeLeft = function () {
//     var elem = document.querySelectorAll('.snake  .snake_part')
//     for (var i = 0; i <  elem.length; i++) {
//         elem[i].style.right = 30 + 'px';
//         elem[i].style.top = 30 + 'px';
//     }
// };
//
// SnakeKeyMap.prototype.moveSnakeRigth = function () {
//
// };
//
// SnakeKeyMap.prototype.moveSnakeUp = function () {
//
// };
//
// SnakeKeyMap.prototype.moveSnakeDown = function () {
//
// };
//
// SnakeKeyMap.prototype.snakePressKeyListener = function () {
//     window.addEventListener('keypress', function (event) {
//
//         switch (event.keyCode) {
//             case createKeyMap.snakeUp:
//                 createKeyMap.currentKey = 'up';
//                 break;
//             case createKeyMap.snakeDown:
//                 createKeyMap.currentKey = 'down';
//                 break;
//             case createKeyMap.snakeLeft:
//                 createKeyMap.currentKey = 'left';
//                 break;
//             case createKeyMap.snakeRight:
//                 createKeyMap.currentKey = 'right';
//                 break;
//         }
//     })
// }
//
// SnakeKeyMap.prototype.init = function() {
//     setInterval(this.moveSnakeLeft, 70);
// };
//
// var createKeyMap = new SnakeKeyMap();




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

/*
createSnake.init();*/
