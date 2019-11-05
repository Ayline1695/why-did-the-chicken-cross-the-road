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


// Bonus.prototype.remove = function() {
//     // draw bonus outside of the screen
//     this.ctx.drawImage(this.bonusImage, 9000, 9000, this.size, this.size);
// }