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

const numbers = {
    0: new Image(),
    1: new Image(),
    2: new Image(),
    3: new Image(),
    4: new Image(),
    5: new Image(),
    6: new Image(),
    7: new Image(),
    8: new Image(),
    9: new Image()
}

for(let i = 0; i < 10; i++){
    numbers[i].src = `./assets/${i}.png`
}

const startImage = new Image()
startImage.src = './assets/message.png'
startImage.onload = () => {
    context.drawImage(
        startImage, 
        canvas.width / 2 - startImage.width / 2, 
        canvas.height / 2 - startImage.height / 2, 
        startImage.width, 
        startImage.height
    )
}
