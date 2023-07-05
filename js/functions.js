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
    }, 1500)
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
        context.drawImage(numbers[splitNums[1]], x+15, y)
    }
}

// Function to display the gameover screen
function gameOver(score){
    context.drawImage(gameOverImage, canvas.width / 2 - gameOverImage.width / 2, canvas.height / 2 - 100, gameOverImage.width, gameOverImage.height);
    cancelAnimationFrame(animationId)
    clearInterval(intervalId)
}