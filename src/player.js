'use strict';

function Player(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.lives = 3;
    this.widthUD = 30; // chicken width when going Up and Down
    this.widthLR = 45; // chicken width when going Left and Right
    this.height = 60;
    this.x = canvas.width / 2.2;
    this.y = canvas.height - 60;
    this.direction = 'up';
    this.timeScore = 0;
    this.playerImageUp = new Image();
    this.playerImageDown = new Image();
    this.playerImageRight = new Image();
    this.playerImageLeft = new Image();
    this.playerImageUp.src = "../assets/img/chicken-up.png";
    this.playerImageDown.src = "../assets/img/chicken-down.png";
    this.playerImageRight.src = "../assets/img/chicken-right.png";
    this.playerImageLeft.src = "../assets/img/chicken-left.png";
    this.playerImage = this.playerImageUp;
}


Player.prototype.draw = function() {
    // Change the image of the player in each direction
    switch (this.direction) { 
        case "up":
            this.playerImage = this.playerImageUp;
            // console.log('IM HEADING NORTH');
            this.ctx.drawImage(this.playerImage, this.x, this.y, this.widthUD, this.height);
            break;
        case "down":
            this.playerImage = this.playerImageDown;
            // console.log('IM HEADING SOUTH');
            this.ctx.drawImage(this.playerImage, this.x, this.y, this.widthUD, this.height);
            break;
        case "right":
            this.playerImage = this.playerImageRight;
            // console.log('IM HEADING EAST');
            this.ctx.drawImage(this.playerImage, this.x, this.y, this.widthLR, this.height);
            break;
        case "left":
            this.playerImage = this.playerImageLeft;
            // console.log('IM HEADING WEST');
            this.ctx.drawImage(this.playerImage, this.x, this.y, this.widthLR, this.height);
            break;
    }
    
};


Player.prototype.move = function(direction) {
    
    this.direction = direction;

    switch (direction) { 
        case "up":
            if (this.y > 0) { 
                this.y -= this.height;
            }
            break;
        case "down":
            if (this.y < this.canvas.height - this.height) { 
                this.y += this.height;
            }
            break;
        case "left":
            if (this.x > 0) { 
                this.x -= this.widthLR;
            }
            break;
        case "right":
            if (this.x < this.canvas.width - this.widthLR) { 
                this.x += this.widthLR;
            }
            break;
    }
};


Player.prototype.collidedWithObstacle = function(obstacle) {
    var playerLeft = this.x;
    var playerRight = this.x + this.widthLR;
    var playerTop = this.y;
    var playerBottom = this.y + this.height;

    var obstacleLeft = obstacle.x;
    var obstacleRight = obstacle.x + obstacle.width;
    var obstacleTop = obstacle.y;
    var obstacleBottom = obstacle.y + obstacle.height;

    var crossRight = obstacleLeft < playerRight;
    var crossLeft = obstacleRight > playerLeft;
    var crossTop = obstacleBottom > playerTop;
    var crossBottom = obstacleTop < playerBottom;

    if ((crossRight && crossLeft) && (crossTop && crossBottom)) {
        return true;
    } else {
        return false;
    }
};


Player.prototype.collidedWithScreen = function() {
    var screenLeft = 0;
    var screenRight = this.canvas.width;

    if (this.x < screenLeft || (this.x + this.widthLR) > screenRight) {
        return true;
    } else {
        return false;
    }
};



Player.prototype.removeLife = function() {
    this.lives -= 1;
};
