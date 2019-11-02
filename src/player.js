'use strict';

function Player(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.lives = 3;
    this.size = 50;
    this.x = canvas.width / 2;
    this.y = canvas.height - 50;
    this.direction = 'up';
    this.timeScore = 0;
}


Player.prototype.draw = function() {
    this.ctx.fillStyle = '#66D3FA'; 
    this.ctx.fillRect(this.x, this.y, this.size, this.size); // fillRect(x, y, width, height)
};


Player.prototype.setDirection = function(direction) {
    switch (direction) { 
        case "up":
            if (this.y > 0) { 
                this.y -= this.size;
            }
            break;
        case "down":
            if (this.y < this.canvas.height - this.size) { 
                this.y += this.size;
            }
            break;
        case "left":
            if (this.x > 0) { 
                this.x -= this.size;
            }
            break;
        case "right":
            if (this.x < this.canvas.width - this.size) { 
                this.x += this.size;
            }
            break;
    }
};


Player.prototype.didCollide = function(enemy) {
};


Player.prototype.handleScreenCollision = function() {
};


Player.prototype.removeLife = function() {
};

