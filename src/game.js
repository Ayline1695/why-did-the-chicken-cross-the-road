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

    // Set the canvas to be same as the viewport size
    this.containerWidth = this.canvasContainer.offsetWidth;
    this.containerHeight = this.canvasContainer.offsetHeight;
    this.canvas.setAttribute('width', this.containerWidth);
    this.canvas.setAttribute('height', this.containerHeight);

    // Start the game loop
    this.startLoop();
}


Game.prototype.startLoop = function() {
}


Game.prototype.createObstacles = function () {
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