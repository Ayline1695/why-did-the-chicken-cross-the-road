'use strict';

class Obstacle {
	constructor(canvas, ctx, speed, row, direction, x, y) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.speed = speed;
		this.row = row;
		this.direction = direction;
		this.width = 80;
		this.height = 60;
		this.x = x;
		this.y = y;
		this.obstacleImage = new Image();
		this.obstacleImage1 = new Image();
		this.obstacleImage2 = new Image();
		this.obstacleImage3 = new Image();
		this.obstacleImage4 = new Image();
		this.obstacleImage5 = new Image();
		this.obstacleImage6 = new Image();
		this.obstacleImage1.src = "./assets/img/truck.png";
		this.obstacleImage2.src = "./assets/img/truck-reversed.png";
		this.obstacleImage3.src = "./assets/img/boat.png";
		this.obstacleImage4.src = "./assets/img/boat-reversed.png";
		this.obstacleImage5.src = "./assets/img/crocodile.png";
		this.obstacleImage6.src = "./assets/img/crocodile-reversed.png";
	}

	draw() {
		// Create diferent images for each row of cars
		if (this.row === 1 || this.row === 3 ) {
			this.obstacleImage = this.obstacleImage1;
		} else if (this.row === 2 || this.row === 4) {
			this.obstacleImage = this.obstacleImage2;
		} else if (this.row === 5) {
			this.obstacleImage = this.obstacleImage3;
		} else if (this.row === 6) {
			this.obstacleImage = this.obstacleImage6;
		} else if ( this.row === 7) {
			this.obstacleImage = this.obstacleImage5;
		} else if ( this.row === 8) {
			this.obstacleImage = this.obstacleImage4;
		}
		this.ctx.drawImage(this.obstacleImage, this.x, this.y, this.width, this.height);
	};

	move() {
		this.x = this.x + this.direction * this.speed;
	};
}


