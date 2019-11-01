'use strict';

function Game() {
    this.canvas = null;
    this.ctx = null;
    this.otherSide = null;
    this.obstacles = [];
    this.player = null;
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


Game.prototype.removeGameScreen = function() {
};


Game.prototype.timeCount = function() {
};