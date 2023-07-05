// background of the canvas
const backgroundImage = new Image();
backgroundImage.src = "./assets/background-day.png";
backgroundImage.onload = () => {
    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};

// pipes upward image
const pipeImage = new Image();
pipeImage.src = "./assets/pipe-green-upward.png";

//pipes downward image
const invertedPipeImage = new Image()
invertedPipeImage.src = "./assets/pipe-green-inverted.png";

//gameover image
const gameOverImage = new Image()
gameOverImage.src = "./assets/gameover.png";
