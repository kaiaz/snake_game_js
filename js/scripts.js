//start game

function rand(min,max,num){
    return Math.floor(Math.floor(Math.random()*(max-min+1)+min) / num) * num;
}

var currentCount = 60;

function makeCounter() {
    return function() {
        return currentCount = currentCount + 30;
    };
}

var counter = makeCounter();


var startGame = {

    pressStart: function () {
       window.addEventListener('keypress', function (event) {
            if(event.keyCode === 32) {
                createSnake.init();
                createSnake.keyListener();
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




// snake control

//
// SnakeKeyMap.prototype.moveSnakeLeft = function () {
//     var elem = document.querySelectorAll('.snake  .snake_part')
//     for (var i = 0; i <  elem.length; i++) {
//         elem[i].style.right = 30 + 'px';
//         elem[i].style.top = 30 + 'px';
//     }
// };
//
// SnakeKeyMap.prototype.moveSnakeRight = function () {
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







/*
createSnake.init();*/
