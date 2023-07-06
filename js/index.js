const canvas = document.querySelector('#canvas')

// the height and width of the canvas
canvas.height = innerHeight - 10
canvas.width = innerWidth / 3

// context of the canvas
const context = canvas.getContext('2d')
let animationId

//Start game on s press
addEventListener('keyup', (event) => {
    // listening to the space press
    if(event.code === 'Space' && gameState === 'running'){
        bird.jump()
    }

    if(event.code === "KeyS" && (gameState === 'initial-game' || gameState === 'gameover')){
        init()
        generatePipes()
        animate()
        gameState = 'running'
    }else if(event.code === "KeyS" && gameState === 'paused'){
        generatePipes()
        animate()
        gameState = 'running'
    }else if(event.code === "KeyS" && gameState === 'running'){
        return
    }

    //pause game on p press
    if(event.code === "KeyP" && gameState !== 'gameover'){
        gameState = 'paused'
        cancelAnimationFrame(animationId)
        clearInterval(intervalId)
    }
})

// Makes it responsive
addEventListener('resize', () => {
    canvas.height = innerHeight - 10
    canvas.width = innerWidth / 3
    init()
})

// Start
context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
// The initial x and y position of the bird
const birdYPos = canvas.height / 2
const birdXPos = canvas.width / 8

// score
let score = 0
// A new bird at the start of the game
let bird = new Bird(birdXPos, birdYPos, 'yellow')

if(localStorage.getItem('highScore')){
    highScore = localStorage.getItem('highScore')
}else{
    localStorage.setItem('highScore', 0)
    highScore = localStorage.getItem('highScore')
}


const highScoreContainer = document.querySelector('.highscore')
highScoreContainer.textContent = `Highscore = ${highScore}`


