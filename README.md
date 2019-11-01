# Why did the chicken cross the road?

## Description
"Why did the chicken cross the road? To get to other side..." is a [common riddle joke](https://en.wikipedia.org/wiki/Why_did_the_chicken_cross_the_road), and a 1994 [video game](https://archive.org/details/WhyDidTheChickenCrosstheRoadTheVideoGame_1020) by Jim Fowler.
The object of the game is to direct an adventurous chicken to the other side of a busy road. The player must avoid several different kinds of vehicules to prevent our chicken to die tragically. 


## MVP (DOM - CANVAS)
A chicken that can move in 4 directions and has to be directed to the other side of the screen without touching any moving obstacles. 
The game is over when the player collides more than 2 times with an obstacle. 
The game is won whenever the player makes it to the other side.


## Data structure
1. index.html
2. main.js
3. game.js
4. player.js
5. obstacle.js

### 1. index.html file

### 2. Main file

- buildDom
- createStartScreen / removeStartScreen
- createGameScreen / removeGameScreen
- createGameOverScreen / removeGameOverScreen
- createWinScreen / removeWinScreen
- startGame / endGame

### 3. Game Constructor

**Properties**
- canvas
- ctx
- player
- obstacles
- goalLine
- timeScore

**Methods**
- start
- checkCollision
- checkOtherSide
- gameOver
- win
- updateScore

### 4. Player Constructor

**Properties**
- x position
- y position
- width
- height
- image
- direction
- speed
- lives

**Methods**
- setDirection
- updateLives
- didCollide
- handleScreenCollision
- removeLife
- draw

### 5. Obstacle Constructor

**Properties**
- x position
- y position
- width
- height
- image
- row
- speed
- direction

**Methods**
- draw
- move


## States and States Transitions
- startScreen
  - Start the game
  - Goes to gameScreen when Start button is clicked
- gameScreen
  - Game running while lives > 0
  - Goes to gameoverScreen if lives < 0
  - Goes to winScreen if Players x position <= goalLine
- gameoverScreen
  - Shows Game Over message and Restart button
  - Goes back to Game Screen when Restart button is clicked
- winScreen
  - Shows Win message, time score and Restart button
  - Goes back to Game Screen when Restart button is clicked


## Tasks
- Setup git & GitHub
- Create and connect files: main.js, player.js, obstacle.js, 
- BuildDom in main.js
- Create 4 screens in main.js
- Create screen transitions in main.js
- Create Game constructor
- Create loop in game.js
- Create Player constructor
- Create Obstacle constructor
- Draw obstacles in game.js
- Move obstacles in game.js
- Move player  in game.js
- Check Collisions  in game.js
- Check game result in game.js


## Backlog
- Time limit (must cross in less than 2 min)
- Space limit (looses a life if leaves the screen)
- Bonus life (extra life if eats a randomly generated corn)
- Sounds and visual effects (when collides, looses or wins)
- User registration and scoreboard (to compete again other players)


## Links

### Trello
[Link url](https://trello.com/invite/b/0VjAAZ5H/f3ea8c975f1011a647c9bc726fc656af/ironhack-project-1)


### Git
[Link Repo](https://github.com/caprosset/why-did-the-chicken-cross-the-road)
[Link Deploy](http://github.com) - not available yet


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com) - not available yet