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
            gameOver()
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
        gameOver()
    }

    // if bird goes above the screen
    if(bird.y + bird.height < 0){
        gameOver()
    }

    // show score in the screen
    displayScore(canvas.width / 2 - 15, canvas.height / 2 - 300, score)
    bird.update()
}

let gameState = "initial-game"