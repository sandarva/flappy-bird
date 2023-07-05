// Function to generate random number between a range
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Function to generate the pipes that block the bird every 2 sec
let intervalId
// All the pipes on the screen
let pipes = []
function generatePipes(){
    intervalId = setInterval(() => {
        const pipe = new Pipe(canvas.width, 0, 250, 'seagreen')
        pipes.push(pipe)
    }, 2000)
}

// Function to display the score
function displayScore(x, y, score){
    context.fillStyle = "white";
    context.font="45px sans-serif";
    context.fillText(score, x, y);
}

// Function to display the gameover screen with score
function gameOver(score){
    context.drawImage(gameOverImage, canvas.width / 2 - gameOverImage.width / 2, canvas.height / 2 - 100, gameOverImage.width, gameOverImage.height);
    cancelAnimationFrame(animationId)
    clearInterval(intervalId)
    context.textAlign="center"
    displayScore(canvas.width/ 2, canvas.height / 2, score)
    console.log(score);
}