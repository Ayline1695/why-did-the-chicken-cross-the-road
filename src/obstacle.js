'use strict';

function Obstacle(canvas, ctx, y, speed) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.size = 20;
  this.x;
  this.y = y;
  this.speed = speed;
}

Obstacle.prototype.draw = function() {
};

Obstacle.prototype.updatePosition = function() {
};

Obstacle.prototype.isInsideScreen = function() {
};