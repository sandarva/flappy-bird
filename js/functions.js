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
function displayScore(score){
    context.fillStyle = "white";
    context.font="45px sans-serif";
    context.fillText(score, 15, 45);

}