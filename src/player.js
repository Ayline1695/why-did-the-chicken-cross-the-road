'use strict';

function Player(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.lives = 3;
    this.size = 40;
    this.x = canvas.width / 2;
    this.y = canvas.height - 50;
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
            break;
        case "down":
            this.playerImage = this.playerImageDown;
            // console.log('IM HEADING SOUTH');
            break;
        case "right":
            this.playerImage = this.playerImageRight;
            // console.log('IM HEADING EAST');
            break;
        case "left":
            this.playerImage = this.playerImageLeft;
            // console.log('IM HEADING WEST');
            break;
    }
    this.ctx.drawImage(this.playerImage, this.x, this.y, this.size, this.size);
};


Player.prototype.setDirection = function(direction) {
    
    this.direction = direction;

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

