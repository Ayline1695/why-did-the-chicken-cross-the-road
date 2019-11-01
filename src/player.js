'use strict';


function Player(canvas, ctx, lives) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.lives = lives;
    this.size = 20;
    this.x = canvas.width / 2;
    this.y = canvas.height;
    this.direction = 0;
    this.speed = 10;
}


Player.prototype.setDirection = function(direction) {
};


Player.prototype.didCollide = function(enemy) {
};


Player.prototype.handleScreenCollision = function() {
};


Player.prototype.removeLife = function() {
};


Player.prototype.draw = function() {
};