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
    this.loopCount = 0;
    this.timeScore = 0;
    this.background = new Image();
    this.background.src = "../assets/img/canvas-background.jpg";
    this.lives = new Image();
    this.lives.src = "../assets/img/corn.png";
}


Game.prototype.start = function() {
    // Get the canvas element, create ctx, save canvas and ctx in the game object
    this.canvasContainer = document.querySelector('.canvas-container');
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    // Set the canvas width and height
    this.canvas.setAttribute('width', 600);
    this.canvas.setAttribute('height', 600);

    // Save reference to the time element
    this.timerElement = this.gameScreen.querySelector('.timer .value');

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

        // Draw obstacles and player
        this.drawCanvas(); 

        // Check if player had hit any obstacle (check all obstacles)
        this.checkCollisions();

        // Check if player made it to the other side
        this.win();
        
        // Stop the game if won/lost
        if (!this.gameIsOver && !this.gameIsWon) {
            window.requestAnimationFrame(loop);
        }

        // Print lives icons
        this.printLives(); 

        // Print time in seconds
        this.timeCount();
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
        this.obstacles.push(new Obstacle(this.canvas, this.ctx, 1, 1, -1, 0 + i, 480)); // (canvas, ctx, speed, row, direction, x, y)
    }

    for (var i = 0; i < (this.canvas.width / 2.5) * 200; i += (this.canvas.width / 2.5)) {
        this.obstacles.push(new Obstacle(this.canvas, this.ctx, 0.5, 2, 1, 550 - i, 420));
    }

    for (var i = 0; i < (this.canvas.width / 2.5) * 200; i += (this.canvas.width / 2.5)) {
        this.obstacles.push(new Obstacle(this.canvas, this.ctx, 1, 3, -1, 0 + i, 360));
    }

    for (var i = 0; i < (this.canvas.width / 2) * 200; i += (this.canvas.width / 2)) {
        this.obstacles.push(new Obstacle(this.canvas, this.ctx, 0.5, 4, 1, 630 - i, 300));
    }

    for (var i = 0; i < (this.canvas.width / 2.5) * 200; i += (this.canvas.width / 2.5)) {
        this.obstacles.push(new Obstacle(this.canvas, this.ctx, 1, 5, -1, 0 + i, 240)); // (canvas, ctx, speed, row, direction, width, x, y)
    }

    for (var i = 0; i < (this.canvas.width / 2.5) * 200; i += (this.canvas.width / 2.5)) {
        this.obstacles.push(new Obstacle(this.canvas, this.ctx, 0.5, 6, 1, 550 - i, 180));
    }

    for (var i = 0; i < (this.canvas.width / 2.5) * 200; i += (this.canvas.width / 2.5)) {
        this.obstacles.push(new Obstacle(this.canvas, this.ctx, 1, 7, -1, 0 + i, 120));
    }

    for (var i = 0; i < (this.canvas.width / 2) * 200; i += (this.canvas.width / 2)) {
        this.obstacles.push(new Obstacle(this.canvas, this.ctx, 1.5, 8, 1, 630 - i, 60));
    }
}


Game.prototype.checkCollisions = function() {
    // check collision with obstacles
    this.obstacles.forEach(function(obstacle) {

    if (this.player.didCollide(obstacle)) {
        console.log('COLLISION');
        this.player.removeLife();
        console.log('Lives:', this.player.lives);

        if (this.player.lives > 0) {
        // make the player come back to initial position when collided and lives > 0 
        this.player.x = this.canvas.width / 2.2;
        this.player.y = this.canvas.height - 60;
        } else if (this.player.lives === 0) {
            this.gameOver();
        }
    }
  }, this);
}


Game.prototype.passGameResult = function(callback) {
    this.onGameOverCallback = callback;
};


Game.prototype.gameOver = function() {
    // flag `gameIsOver = true` stops the loop
    this.gameIsOver = true;

    // call the gameOver function from `main` to show the right end screen
    this.onGameOverCallback();
}


Game.prototype.gameWon = function() {
    // flag `gameIsWon = true` stops the loop
    this.gameIsWon = true;

    // call the gameOver function from `main` to show the right end screen
    this.onGameOverCallback();
}


Game.prototype.win = function() {
    if (this.player.y <= 40) {
        console.log('YOU HAVE WON');
        this.gameWon();
    }
}


Game.prototype.timeCount = function() {
    // count the loops
    this.loopCount++;
    if (this.loopCount % 60 === 0) { // every time we reach a second (considering that 60 loops = 1 second)
        // convert the time in seconds
        this.timeScore = Math.floor(this.loopCount / 60);
        // print the seconds to the game screen
        this.timerElement.innerHTML = this.timeScore + ' seconds';
    }
}


Game.prototype.printLives = function () { 
    // print lives icons depending on how many lives are remaining
    if (this.player.lives === 3) {
        this.ctx.drawImage(this.lives, 5, 555, 25, 30);
        this.ctx.drawImage(this.lives, 35, 555, 25, 30);
        this.ctx.drawImage(this.lives, 65, 555, 25, 30)
    } else if (this.player.lives === 2) {
        this.ctx.drawImage(this.lives, 5, 555, 25, 30);
        this.ctx.drawImage(this.lives, 35, 555, 25, 30);
    } else {
        this.ctx.drawImage(this.lives, 5, 555, 25, 30);
    }
}


Game.prototype.destroyGameScreen = function() {
    this.gameScreen.remove();
};
