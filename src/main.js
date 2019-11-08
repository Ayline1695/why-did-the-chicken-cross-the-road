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
    var name;


    // -- start screen
    function createStartScreen() {
        startScreen = buildDom(`
            <main class="transition-screen">
                <h1>Why did <br>the chicken <br>cross the road?</h1>
                <div id="register-name">
                    <form>
                        <label>First, insert your name:</label>
                        <input id="username" type="text" placeholder="My name" value="">
                    </form>
                </div>
                <div>
                    <button id="start-game">Start Game</button>
                </div>
            </main>
        `);

        document.body.appendChild(startScreen);

        // start the game on click
        var startButton = startScreen.querySelector('button');
        console.log(startButton);

        startButton.addEventListener('click', function() {
            name = startScreen.querySelector('#username').value;
            if(name === '') {
                name = 'ANONYMOUS CHICKEN'
            }
            startGame(name);
        });

        // start the game on 'enter' keypress
        function startOnEnter() {
            if (event.keyCode === 13) {
                console.log('enter'); // 13 is enter
                document.body.removeEventListener('keydown', startOnEnter);
                name = startScreen.querySelector('#username').value;
            if(name === '') {
                name = 'ANONYMOUS CHICKEN'
            }
                startGame(name);
            }
        }
        document.body.addEventListener('keydown', startOnEnter);
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
        // debugger;
        // console.log("start called")
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
        <main class="transition-screen blood">
            <div>
                <h1><img src="./assets/img/gameover-blood.png" alt="game over"></h1>
                <p>You just killed<br> an innocent chicken.</p>
            </div>
            <button>Restart</button>
        </main>
    `);
    
    // restart the game on 'click'
    var button = gameOverScreen.querySelector('button');
    button.addEventListener('click', function() {
        startGame(name);
    }); 
    
    // restart the game on 'enter' keypress
    function startOnEnter() {
        if (event.keyCode === 13) { // 13 is enter
            document.body.removeEventListener('keydown', startOnEnter);
            startGame(name);
        }
    }
    document.body.addEventListener('keydown', startOnEnter);
    
    document.body.appendChild(gameOverScreen);
    }

    function removeGameOverScreen() {
        if (gameOverScreen) {
            gameOverScreen.remove();
        }
    }



    // -- win screen
    function createWinScreen(name, timeScore) {
        winScreen = buildDom(`
        <main class="transition-screen">
            <h1><img src="./assets/img/youwin.png" alt="you win"></h1>
            <div id="quote">
                <h4>So, why did the chicken <br>cross the road?</h4>
                <p id='answer'>Random answer here<p>
                <p id='author'>The author of the random answer here<p>
            </div>
            <div id="scores">
                <p>Your time: <span></span></p>
                <table id="scoretable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td id='name1'></td><td id='time1'></td></tr>
                        <tr><td id='name2'></td><td id='time2'></td></tr>
                        <tr><td id='name3'></td><td id='time3'></td></tr>
                        <tr><td id='name4'></td><td id='time4'></td></tr>
                        <tr><td id='name5'></td><td id='time5'></td></tr>
                        <tr><td id='name6'></td><td id='time6'></td></tr>
                        <tr><td id='name7'></td><td id='time7'></td></tr>
                        <tr><td id='name8'></td><td id='time8'></td></tr>
                        <tr><td id='name9'></td><td id='time9'></td></tr>
                        <tr><td id='name10'></td><td id='time10'></td></tr>
                    </tbody>
                </table>
            </div>
            <button>Restart</button>
        </main>
    `);

        // restart the game on 'click'
        var button = winScreen.querySelector('button');
        button.addEventListener('click', function() {
            startGame(name);
        });

        // restart the game on 'enter' keypress
        function startOnEnter() {
            if (event.keyCode === 13) { // 13 is enter
                document.body.removeEventListener('keydown',startOnEnter);
                startGame(name);
            }
        }
        document.body.addEventListener('keydown', startOnEnter);

        // Store player's name and corresponding timescore into an array
        var scoreArray;
        if(localStorage.getItem('scoreArray') === null){
            scoreArray = [];
        } else {
            scoreArray = JSON.parse(localStorage.getItem('scoreArray'));
        }

        // store player's name and timescore into an object that is pushed into the scoreArray
        var newPlayer = {
            name: name.toUpperCase(),
            score: timeScore
        };
        scoreArray.push(newPlayer);

        // stringify the array in order to add it to local storage
        localStorage.setItem('scoreArray', JSON.stringify(scoreArray));

        // convert it back into an array in order to get data from local storage
        var scoreBoard = JSON.parse(localStorage.getItem('scoreArray'));
        scoreBoard.sort(function(a,b){
            return a.score - b.score;
        });
        console.log('SCOREBOARD', scoreBoard);

        // print the best 5 scores into a table
        // var scores = winScreen.querySelector('#scoretable tbody');
        
        for(var i = 0; i < 10; i++) {
            var playersName = winScreen.querySelector('#name' + (i+1));
            var playersTime = winScreen.querySelector('#time' + (i+1));
            if(scoreBoard[i]) {
                playersName.innerHTML = scoreBoard[i].name;
                playersTime.innerHTML = scoreBoard[i].score + ' seconds';
            } else {
                playersName.innerHTML = '';
                playersTime.innerHTML = '';
            }            
        }

        // print the timescore to the screen
        var span = winScreen.querySelector('span');
        span.innerText = timeScore + ' seconds';

        // calculate a random index and print a random answer and author
        var randomIndex = Math.floor(Math.random() * (answers.length - 1));

        var answer = winScreen.querySelector('#answer');
        answer.innerText = '';
        answer.innerText = getRandomAnswer(randomIndex);

        var author = winScreen.querySelector('#author');
        author.innerText = '';
        author.innerText = getRandomAuthor(randomIndex);
        
        // append the winscreen to the DOM
        document.body.appendChild(winScreen);
    }

    function removeWinScreen() {
        if (winScreen) {
            winScreen.remove();
        }
    }

    
    // -- setting the game state
    function startGame(name) {
        // first remove the start screen
        removeStartScreen();

        // later remove the gameOverScreen / winScreen
        removeGameOverScreen();
        removeWinScreen();

        // then print the game screen
        game = new Game(name);
        game.gameScreen = createGameScreen();

        // start the game
        game.start();

        // end the game
        game.passGameResult(function() {
            endGame(name, game.timeScore);
        });
    }


    function endGame(name, timeScore) {
        console.log('GAME ENDED');
        removeGameScreen();

        if(game.gameIsWon) {
            console.log('YOU ARE A WINNER');
            var victorySound = new Audio ('./assets/audio/chicken-victory.wav');
            victorySound.currentTime = 0;
            victorySound.volume = 0.2;
            victorySound.play();
            createWinScreen(name, timeScore);
        } else {
            console.log('YOU ARE A LOOSER');
            var gameOverSound = new Audio ('./assets/audio/chicken-smashed.wav');
            gameOverSound.currentTime = 0;
            gameOverSound.volume = 0.5;
            gameOverSound.play();
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
    ['Bhuddha', 'If you ask this question, you deny your own chicken-nature.'],
    ['Darwin', 'Chickens, over great periods of time, have been naturally selected in such a way that they are now genetically predisposed to cross roads.'],
    ['Ernest Hemingway', 'To die. In the rain.'],
    ['Jack Nicholson', 'Cause it fuckin\' wanted to. That\'s the fuckin\' reason.'],
    ['The Bible', 'And God came down from the heavens, and He said unto the chicken, "Thou shalt cross the road." And the Chicken crossed the road, and there was much rejoicing.'],
    ['Freud', 'The fact that you thought that the chicken crossed the road reveals your underlying sexual insecurity.'],
    ['Richard M. Nixon', 'The chicken did not cross the road. I repeat, the chicken did not cross the road.'],
    ['Martin Luther King', 'Jr.: I envision a world where all chickens will be free to cross roads without having their motives called into question.'],
    ['Grandpa', 'In my day, we didn\'t ask why the chicken crossed the road. Someone told us that the chicken had crossed the road, and that was good enough for us.'],
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