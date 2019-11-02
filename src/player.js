'use strict';


function Player(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.lives = 3;
    this.size = 50;
    this.x = canvas.width / 2;
    this.y = 550;
    this.direction = 0;
    this.timeScore = 0;
}

Player.prototype.draw = function() {
    this.ctx.fillStyle = '#66D3FA'; 
    this.ctx.fillRect(this.x, this.y, this.size, this.size); // fillRect(x, y, width, height)
};


Player.prototype.setDirection = function(direction) {
};


Player.prototype.didCollide = function(enemy) {
};


Player.prototype.handleScreenCollision = function() {
};


Player.prototype.removeLife = function() {
};


