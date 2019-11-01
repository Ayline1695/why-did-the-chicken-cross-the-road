# Why did the chicken cross the road?

## Description
"Why did the chicken cross the road? To get to other side..." is a [common riddle joke](https://en.wikipedia.org/wiki/Why_did_the_chicken_cross_the_road), and a 1994 video game by Jim Fowler.
The object of the game is to direct an adventurous chicken to the other side of a busy road. The player must avoid several different kinds of vehicules to prevent our chicken to die tragically. 


## MVP (DOM - CANVAS)
A chicken that can move in 4 directions and has to be directed to the other side of the screen without touching any moving obstacles. 
The game is over when the player collides more than 2 times with an obstacle. 
The game is won whenever the player makes it to the other side.


## Backlog
- Time limit (must cross in less than 2 min)
- Space limit (looses a life if leaves the screen)
- Bonus life (extra life if eats a randomly generated corn)
- Sounds and visual effects (when collides, looses or wins)
- User registration and scoreboard (to compete again other players)


## Data structure
1.index.html
2.main.js
3.game.js
4.player.js
5.obstacle.js

### 1. index.html file

### 2. Main file

- buildDom
- createSplashScreen
- createGameScreen
- createGameOverScreen
- createWinScreen

### 3. Game Constructor

**Properties**
- player
- obstacles
- score

**Methods**
- start
- checkCollision
- updateScore
- gameOver
- win

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
- draw
- move
- updateLives

### 5. Obstacle Constructor

**Properties**
- x position
- y position
- width
- height
- image
- direction
- speed

**Methods**
- move
- draw


## States y States Transitions
- splashScreen
- gameScreen
- gameoverScreen
- winScreen


## Tasks
// to be completed


## Links

### Trello
[Link url](https://trello.com/invite/b/0VjAAZ5H/f3ea8c975f1011a647c9bc726fc656af/ironhack-project-1)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/caprosset/why-did-the-chicken-cross-the-road)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)