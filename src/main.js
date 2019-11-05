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
                <button type="submit">Start</button>
            </main>
        `);

        document.body.appendChild(startScreen);

        // start the game on click
        var startButton = startScreen.querySelector('button');
        startButton.addEventListener('click', startGame);

        // start the game on 'enter' keypress
        // document.body.addEventListener('keypress', function(event) {
        //     if (event.keyCode === 13) { // 13 is enter
        //         startGame();
        //     }
        // });
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
                    <div class="timer">
                        <span class="label">Time: </span>
                        <span class="value">0 seconds</span>
                    </div>
                </div>
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
            <button type="submit">Restart</button>
        </main>
    `);

        // restart the game on 'click'
        var button = gameOverScreen.querySelector('button');
        button.addEventListener('click', startGame); 

        // restart the game on 'enter' keypress
        // document.body.addEventListener('keypress', function(event) {
        //     if (event.keyCode === 13) { // 13 is enter
        //         startGame();
        //     }
        // });
        
        document.body.appendChild(gameOverScreen);
    }

    function removeGameOverScreen() {
        if (gameOverScreen) {
            gameOverScreen.remove();
        }
    }



    // -- win screen
    function createWinScreen(timeScore) {
        winScreen = buildDom(`
        <main>
            <h1>Game won</h1>
            <p>You are a chicken saver!!!</p>
            <p>Your time: <span></span></p>
            <p>Random answer here<p>
            <button type="submit">Restart</button>
        </main>
    `);


        // restart the game on 'click'
        var button = winScreen.querySelector('button');
        button.addEventListener('click', startGame); 

        // restart the game on 'enter' keypress
        // document.body.addEventListener('keypress', function(event) {
        //     if (event.keyCode === 13) { // 13 is enter
        //         startGame();
        //     }
        // });

        var span = winScreen.querySelector('span');
        span.innerText = timeScore + ' seconds';
        
        document.body.appendChild(winScreen);
    }

    function removeWinScreen() {
        if (winScreen) {
            winScreen.remove();
        }
    }

    
    // -- setting the game state
    function startGame() {
        // first remove the start screen
        removeStartScreen();

        // later remove the gameOverScreen / winScreen
        removeGameOverScreen();
        removeWinScreen();

        // then print the game screen
        game = new Game();
        game.gameScreen = createGameScreen();

        // start the game
        game.start();

        // end the game
        game.passGameResult(function() {
            endGame(game.timeScore);
        });
    }

    function endGame(timeScore) {
        console.log('GAME ENDED');
        removeGameScreen();

        if(game.gameIsWon) {
            console.log('YOU ARE A WINNER');
            createWinScreen(timeScore);
        } else {
            createGameOverScreen();
        }
        
    }

    
    // -- initialize startScreen on initial start
    createStartScreen();
}


window.addEventListener('load', main);