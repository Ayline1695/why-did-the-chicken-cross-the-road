'use strict';

function Game() {
    this.canvas = null;
    this.ctx = null;
    this.obstacles = [];
    this.player = null;
    this.otherSide = null;
    this.gameIsOver = false;
    this.gameIsWon = false;
    this.gameScreen = null;
    this.timer = 0;
}


Game.prototype.start = function() {
    // Get the canvas element, create ctx, save canvas and ctx in the game object
    this.canvasContainer = document.querySelector('.canvas-container');
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    // Set the canvas width and height
    // this.containerWidth = this.canvasContainer.offsetWidth;
    // this.containerHeight = this.canvasContainer.offsetHeight;
    this.canvas.setAttribute('width', 600);
    this.canvas.setAttribute('height', 600);

    // Start the game loop
    this.startLoop();
}


Game.prototype.startLoop = function() {
    // Create instances of player and obstacles
    this.player = new Player(this.canvas, this.ctx);
    console.log('Im the player >>>', this.player)
    this.createObstacles();

    var loop = function() {
        console.log('in loop');

        this.player.draw();

        window.requestAnimationFrame(loop);
    }.bind(this);

      window.requestAnimationFrame(loop);
}


Game.prototype.createObstacles = function () {
    // Canvas width divided by the number of obstacles and multiply for 200 (number of elements necesaries to keep up three lives)
    for (var i = 0; i < (this.canvas.width / 2.5) * 200; i += (this.canvas.width / 2.5)) {
        this.obstacles.push(new Obstacle(this.canvas, 6 / 2, 1, -1, 37, 0 + i, 540)); // (canvas, speed, row, direction, width, x, y)
    }

    for (var i = 0; i < (this.canvas.width / 2.5) * 200; i += (this.canvas.width / 2.5)) {
        this.obstacles.push(new Obstacle(this.canvas, 3 / 2, 2, 1, 37, 550 - i, 490));
    }

    for (var i = 0; i < (this.canvas.width / 2.5) * 200; i += (this.canvas.width / 2.5)) {
        this.obstacles.push(new Obstacle(this.canvas, 4 / 2, 3, -1, 37, 0 + i, 440));
    }

    for (var i = 0; i < (this.canvas.width / 2) * 200; i += (this.canvas.width / 2)) {
        this.obstacles.push(new Obstacle(this.canvas, 13 / 2, 4, 1, 37, 630 - i, 390));
    }
}


Game.prototype.checkCollisions = function() {
}


Game.prototype.passGameResult = function(callback) {
};


Game.prototype.gameOver = function() {
}


Game.prototype.win = function() {
}


Game.prototype.destroyGameScreen = function() {
};


Game.prototype.timeCount = function() {
};