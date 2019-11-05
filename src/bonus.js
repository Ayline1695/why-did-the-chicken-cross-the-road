'use strict';

function Bonus(canvas, ctx, randomX) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.size = 40;
    this.x = randomX;
    this.y =280;
    this.bonusImage = new Image();
    this.bonusImage.src = "./assets/img/corn-candy.png";
}


Bonus.prototype.draw = function() {
    this.ctx.drawImage(this.bonusImage, this.x, this.y, this.size, this.size);
}