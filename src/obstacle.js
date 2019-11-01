'use strict';

function Obstacle(canvas, ctx, speed, row, direction, width, x, y) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.width = width;
	this.height = 50;
    this.row = row;
	this.speed = speed;
	this.direction = direction;
    this.x = x;
    this.y = y;
}

 
Obstacle.prototype.draw = function() {
	// Create diferent images for each row of cars
};

Obstacle.prototype.move = function() {
};