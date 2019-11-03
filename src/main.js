'use strict';


function buildDom(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.children[0];
};


function main() {
    var game; // instance of the Game
    var startScreen; 
    var gameOverScreen;
    // var winScreen;


    // -- start screen
    function createStartScreen() {
        startScreen = buildDom(`
            <main>
                <h1>Why did the chicken cross the road?</h1>
                <button>Start</button>
            </main>
        `);

        document.body.appendChild(startScreen);

        var startButton = startScreen.querySelector('button');
        startButton.addEventListener('click', function() {
            startGame();
        });
    }

    function removeStartScreen() {
        startScreen.remove();
    }


    // -- game screen
    function createGameScreen() {
        var gameScreen = buildDom(`
            <main class="game container">
                <div class="canvas-container">
                    <canvas></canvas>
                </div>
                <footer>
                    <div class="lives">
                        <span class="label">Lives:</span>
                        <span class="value"></span>
                    </div>
                    <div class="timer">
                        <span class="label">Time:</span>
                        <span class="value"></span>
                    </div>
                </footer>
            </main>
        `);

        document.body.appendChild(gameScreen);

        return gameScreen;
    }

    function removeGameScreen() {
        // calls a Game method that removes the screen
        game.destroyGameScreen();
    }



    // -- game over screen
    function createGameOverScreen() {
        gameOverScreen = buildDom(`
        <main>
            <h1>Game over</h1>
            <p>You just killed an innocent chicken 3 times</p>
            <button>Restart</button>
        </main>
    `);

        var button = gameOverScreen.querySelector('button');
        button.addEventListener('click', startGame); 
        
        document.body.appendChild(gameOverScreen);
    }

    function removeGameOverScreen() {
        if (gameOverScreen) {
            gameOverScreen.remove();
        }
    }



    // -- win screen
    function createWinScreen(timer) {
    }

    function removeWinScreen() {
    }


    // -- setting the game state
    function startGame() {
        // first remove the start screen
        removeStartScreen();

        // later remove the gameOverScreen
        removeGameOverScreen();

        // then print the game screen
        game = new Game();
        game.gameScreen = createGameScreen();

        // start the game
        game.start();

        // end the game
        game.passGameResult(function() {
            endGame();
        });
    }

    function endGame() {
        console.log('GAME ENDED');
        removeGameScreen();
        createGameOverScreen();
    }

    
    // -- initialize startScreen on initial start
    createStartScreen();
}


window.addEventListener('load', main);