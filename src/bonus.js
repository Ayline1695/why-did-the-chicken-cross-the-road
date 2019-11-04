'use strict';

function Bonus(canvas, ctx, randomX) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.size = 40;
    this.x = randomX;
    this.y = 480;
    this.bonusImage = new Image();
    this.bonusImage.src = "./assets/img/corn.png";
}

Bonus.prototype.draw = function() {
    this.ctx.drawImage(this.bonusImage, this.x, this.y, this.size, this.size);
}


Bonus.prototype.remove = function() {
    this.ctx.drawImage(this.bonusImage, 9000, 9000, this.size, this.size);
}

// Bonus.prototype.timeToDisplay = function(time) {
// }

// Bonus.prototype.timeToRemove = function(time) {
// }