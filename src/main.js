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
                    <div class="instructions">
                        <p>This is Chicky.</p>
                        <p>Help her to get <br>to the other <br>side in less <br>than 2 min!</p>
                    </div>
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
            <p>You just killed an innocent chicken</p>
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
            <p>Well done !</p>
            <p>Your time: <span></span></p>
            <div>
                <h4>So, why did the chicken cross the road again???</h4>
                <p>Answer:</p>
                <p id='answer'>Random answer here<p>
                <p id='author'>The author of the random answer here<p>
            </div>
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

        // calculate a random index
        var randomIndex = Math.floor(Math.random() * (answers.length - 1));

        var answer = winScreen.querySelector('#answer');
        answer.innerText = getRandomAnswer(randomIndex);

        var author = winScreen.querySelector('#author');
        author.innerText = getRandomAuthor(randomIndex);
        
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

 // Random answers to display to winscreen
 var answers = [
    ['Albert Einstein', 'Whether the chicken crossed the road or the road crossed the chicken depends upon your frame of reference.'],
    ['Isaac Newton', 'Chickens at rest tend to stay at rest. Chickens in motion tend to cross roads.'],
    ['Blaise Pascal', 'The chicken felt pressure on this side of the road. However, when it arrived on the other side it still felt the same pressure.'],
    ['Plato', 'For the greater good.'],
    ['Karl Max', 'It was an historical inevitability.'],
    ['Jean-Paul Sartre', 'In order to act in good faith and be true to itself, the chicken found it necessary to cross the road.'],
    ['Bhuddha', 'If you ask this question, you deny your own chicken-nature.'],
    ['Darwin', 'Chickens, over great periods of time, have been naturally selected in such a way that they are now genetically predisposed to cross roads'],
    ['Salvador Dali', 'The Fish.'],
    ['Emily Dickinson', 'Because it could not stop for death.'],
    ['Ernest Hemingway', 'To die. In the rain.'],
    ['Jack Nicholson', 'Cause it fuckin\' wanted to. That\'s the fuckin\' reason.'],
    ['Albert Camus', 'It doesn\'t matter; the chicken\'s actions have no meaning except to him.'], 
    ['The Bible', 'And God came down from the heavens, and He said unto the chicken, "Thou shalt cross the road." And the Chicken crossed the road, and there was much rejoicing.'],
    ['Freud', 'The fact that you thought that the chicken crossed the road reveals your underlying sexual insecurity.'],
    ['Richard M. Nixon', 'The chicken did not cross the road. I repeat, the chicken did not cross the road.'],
    ['Martin Luther King', 'Jr.: I envision a world where all chickens will be free to cross roads without having their motives called into question.'],
    ['Immanuel Kant', 'The chicken, being an autonomous being, chose to cross the road of his own free will.'],
    ['Grandpa', 'In my day, we didn\'t ask why the chicken crossed the road. Someone told us that the chicken had crossed the road, and that was good enough for us.'],
    ['George Orwell', 'Because the government had fooled him into thinking that he was crossing the road of his own free will, when he was really only serving their interests.'],
    [' The Sphinx', 'You tell me.'],
    [' Ralph Waldo Emerson', 'It didn\'t cross the road; it transcended it.'],
    ['Joseph Stalin', 'I don\'t care. Catch it. I need its eggs to make my omelet.']
];

function getRandomAnswer(index) {
    //return the random sentence
    return answers[index][1];   
}

function getRandomAuthor(index) {
    //return the random author
    return answers[index][0];   
}

window.addEventListener('load', main);