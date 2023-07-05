const canvas = document.querySelector('#canvas')
const startText = document.querySelector('h1')

// the height and width of the canvas
canvas.height = innerHeight - 10
canvas.width = innerWidth / 3

// context of the canvas
const context = canvas.getContext('2d')

// The main function that animates the game
function animate(){
    animationId = requestAnimationFrame(animate)
    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // move the pipe to the left
    pipes.forEach((pipe, pipeIndex) => {
        pipe.update()

        // Check for collision with pipes
        if (
            bird.x <= pipe.x + pipe.width &&
            bird.x + bird.width >= pipe.x &&
            (bird.y <= pipe.height || bird.y + bird.height >= pipe.height + pipe.gapHeight) 
        ) {
            gameOver(score)
        }

        // Check if the pipe has passed the bird
        if (pipe.x + pipe.width < bird.x && !pipe.passed) {
            score += 1
            pipe.passed = true
        }
        
        // remove the pipe if it is outside the screen(canvas)
        if(pipe.x + pipe.width < 0){
            setTimeout(() => {
                pipes.splice(pipeIndex, 1)
            }, 0)
        }
    })

    // if bird goes below the screen
    if(bird.y > canvas.height){
        gameOver(score)
    }

    // if bird goes above the screen
    if(bird.y + bird.height < 0){
        gameOver(score)
    }

    // show score in the screen
    displayScore(15, 45, score)

    // repaint the bird
    bird.update()

}

addEventListener('keyup', (event) => {
    if(event.code === 'Space'){
        bird.jump()
    }
})

// Main Function Start

// score
// let gravity = 10
let score = 0
context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

// The initial x and y position of the bird
const birdYPos = canvas.height / 2
const birdXPos = canvas.width / 8

// A new bird at the start of the game
const bird = new Bird(birdXPos, birdYPos, 'yellow')
bird.draw()

//Start game on Click
addEventListener('click', () => {
    startText.classList.add("d-none")
    generatePipes()
    animate()
}, {once: true})



