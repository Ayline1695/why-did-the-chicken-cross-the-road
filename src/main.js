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
    var winScreen;


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
        startButton.addEventListener('click', startGame);
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
    }

    function removeGameOverScreen() {
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

        // then print the game screen
        game = createGameScreen();

        game.start();
    }

    function endGame() {
        removeGameScreen();
    }


    
    // -- initialize startScreen on initial start
    createStartScreen();
}


window.addEventListener('load', main);