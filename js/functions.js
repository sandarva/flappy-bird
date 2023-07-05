// Function to generate random number between a range
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Function to generate the pipes that block the bird
let intervalId
// All the pipes on the screen
let pipes = []
function generatePipes(){
    intervalId = setInterval(() => {
        const pipe = new Pipe(canvas.width, 0, 170, 'seagreen')
        pipes.push(pipe)
    }, 1000)
}

function splitNum(num) {
    return String(num).split("").map(Number);
}

// Function to display the score
function displayScore(x, y, score){
    if(score < 10){
        context.drawImage(numbers[score], x, y)
    }else if(score >= 10 && score < 100){
        const splitNums = splitNum(score)
        context.drawImage(numbers[splitNums[0]], x, y)
        context.drawImage(numbers[splitNums[1]], x+20, y)
    }else{
        const splitNums = splitNum(score)
        context.drawImage(numbers[splitNums[0]], x, y)
        context.drawImage(numbers[splitNums[1]], x+20, y)
        context.drawImage(numbers[splitNums[2]], x+40, y)

        if(score === 999){
            gameOver()
        }
    }
}

// Function to display the gameover screen
function gameOver(){
    gameState = 'gameover'
    context.drawImage(gameOverImage, canvas.width / 2 - gameOverImage.width / 2, canvas.height / 2 - 100, gameOverImage.width, gameOverImage.height);
    cancelAnimationFrame(animationId)
    clearInterval(intervalId)
}

// Function to initialize the game or restart the game
function init(){
    cancelAnimationFrame(animationId)
    clearInterval(intervalId)

    score = 0
    pipes = []
    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    context.drawImage(
        startImage, 
        canvas.width / 2 - startImage.width / 2, 
        canvas.height / 2 - startImage.height / 2, 
        startImage.width, 
        startImage.height
    )

    bird = new Bird(birdXPos, birdYPos, 'yellow')
}