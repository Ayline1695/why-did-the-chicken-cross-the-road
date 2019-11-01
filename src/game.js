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
}


Game.prototype.startLoop = function() {
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