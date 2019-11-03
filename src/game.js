'use strict';

function Game() {
    this.canvas = null;
    this.ctx = null;
    this.obstacles = [];
    this.player = null;
    this.otherSide = null;
    this.gameIsOver = false;
    this.gameIsWon = false;
    this.gameScreen = null;
    this.timer = 0;
    this.background = new Image();
    this.background.src = "../assets/img/canvas-background.jpg";
}


Game.prototype.start = function() {
    // Get the canvas element, create ctx, save canvas and ctx in the game object
    this.canvasContainer = document.querySelector('.canvas-container');
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    // Set the canvas width and height
    // this.containerWidth = this.canvasContainer.offsetWidth;
    // this.containerHeight = this.canvasContainer.offsetHeight;
    this.canvas.setAttribute('width', 600);
    this.canvas.setAttribute('height', 600);

    // Add event listener for moving the player
    this.handleKeyDown = function(event) {
        if (event.key === 'ArrowUp') {
            this.player.setDirection('up');
            console.log('UP');
        } else if (event.key === 'ArrowDown') {
            this.player.setDirection('down');
            console.log('DOWN');
        } else if (event.key === 'ArrowLeft') {
            this.player.setDirection('left');
            console.log('LEFT');
        } else if (event.key === 'ArrowRight') {
            this.player.setDirection('right');
            console.log('RIGHT');
        }
    };
    document.body.addEventListener('keydown', this.handleKeyDown.bind(this));

    // Start the game loop
    this.startLoop();
}


Game.prototype.startLoop = function() {
    // Create instances of Player and Obstacle
    this.player = new Player(this.canvas, this.ctx);
    this.createObstacles();

    var loop = function() {
        // console.log('in loop');

        // Clear the canvas
        this.clearCanvas();

         // Update the canvas with the state of player and obstacles
         this.updateCanvas(); 

        // Draw the player and obstacles
        this.drawCanvas()

        // Check if player had hit any obstacle (check all obstacles)
        this.checkCollisions();
        
        window.requestAnimationFrame(loop);
    }.bind(this);

    window.requestAnimationFrame(loop);
}


Game.prototype.drawCanvas = function () {
    // Draw obstacles
    this.obstacles.forEach(function (obstacle) { 
        obstacle.draw();
    });

    // Draw player
    // if(!this.player) {
        this.player.draw();
    // }
}


Game.prototype.updateCanvas = function () {
    // Update obstacles position
    this.obstacles.forEach(function (obstacle) { 
        obstacle.move();
    });

    // Add background image to canvas area
    this.ctx.drawImage(this.background, 0, 0, 600, 600); 
}


Game.prototype.clearCanvas = function () { 
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}


Game.prototype.createObstacles = function () {
    // Canvas width divided by the number of obstacles and multiply for 200 (number of elements needed to keep up with 3 lives)
    for (var i = 0; i < (this.canvas.width / 2.5) * 200; i += (this.canvas.width / 2.5)) {
        this.obstacles.push(new Obstacle(this.canvas, this.ctx, 2, 1, -1, 0 + i, 480)); // (canvas, ctx, speed, row, direction, x, y)
    }

    for (var i = 0; i < (this.canvas.width / 2.5) * 200; i += (this.canvas.width / 2.5)) {
        this.obstacles.push(new Obstacle(this.canvas, this.ctx, 1.5, 2, 1, 550 - i, 420));
    }

    for (var i = 0; i < (this.canvas.width / 2.5) * 200; i += (this.canvas.width / 2.5)) {
        this.obstacles.push(new Obstacle(this.canvas, this.ctx, 2, 3, -1, 0 + i, 360));
    }

    for (var i = 0; i < (this.canvas.width / 2) * 200; i += (this.canvas.width / 2)) {
        this.obstacles.push(new Obstacle(this.canvas, this.ctx, 1.5, 4, 1, 630 - i, 300));
    }

    for (var i = 0; i < (this.canvas.width / 2.5) * 200; i += (this.canvas.width / 2.5)) {
        this.obstacles.push(new Obstacle(this.canvas, this.ctx, 2, 5, -1, 0 + i, 240)); // (canvas, ctx, speed, row, direction, width, x, y)
    }

    for (var i = 0; i < (this.canvas.width / 2.5) * 200; i += (this.canvas.width / 2.5)) {
        this.obstacles.push(new Obstacle(this.canvas, this.ctx, 1.5, 6, 1, 550 - i, 180));
    }

    for (var i = 0; i < (this.canvas.width / 2.5) * 200; i += (this.canvas.width / 2.5)) {
        this.obstacles.push(new Obstacle(this.canvas, this.ctx, 2, 7, -1, 0 + i, 120));
    }

    for (var i = 0; i < (this.canvas.width / 2) * 200; i += (this.canvas.width / 2)) {
        this.obstacles.push(new Obstacle(this.canvas, this.ctx, 1.5, 8, 1, 630 - i, 60));
    }
}


Game.prototype.checkCollisions = function() {
    //check collision with obstacles
    this.obstacles.forEach(function(obstacle) {

    if (this.player.didCollide(obstacle)) {
        console.log('COLLISION');
        this.player.removeLife();
        // Make the player disappear when collided (move it off screen to the left)
        this.player.x = 0 - this.player.size;

        // if (this.player.lives === 0) {
        //     this.gameOver();
        // }
    }
  }, this);
}


Game.prototype.passGameResult = function(callback) {
};


Game.prototype.gameOver = function() {
}


Game.prototype.win = function() {
}


Game.prototype.destroyGameScreen = function() {
};


Game.prototype.timeCount = function() {
};