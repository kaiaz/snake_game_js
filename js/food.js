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
        // this.posX = Math.floor(Math.random() * 800);
        // this.posY = Math.floor(Math.random() * 800);
        this.posX = rand(15, 785, 30);
        this.posY = rand(15, 785, 30);
    },

    addFoodPos: function () {
        var elem = document.querySelector('.food');
        console.log(elem);
        elem.style.top = this.posY + 'px';
        elem.style.left = this.posX + 'px';
    },

    creareNewfood: function () {
        food.createFood();
        food.generateFoodPos();
        food.addFoodPos();
    }

};


food.creareNewfood();