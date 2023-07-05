// pipes with gaps
class Pipe{
    constructor(x, y, gapHeight, color){
        this.x = x
        this.y = y

        this.width = 100
        this.height = randomNumber(200, 350)

        this.gapHeight = gapHeight
        this.color = color
        this.speed = 3
    }

    // Function to draw pipes upward and downward in canvas
    draw(){
        context.fillStyle = this.color
        context.drawImage(invertedPipeImage, this.x, this.y, this.width, this.height)
        context.drawImage(pipeImage, this.x, this.height + this.gapHeight, this.width, canvas.height - (this.height + this.gapHeight))
    }
    
    // Function to update the position of pipes in canvas i.e moving left
    update(){
        this.x -= this.speed
        this.draw()
    }
}

//bird [player]
class Bird{
    constructor(x, y, color){
        this.x = x
        this.y = y
        this.width = 32
        this.height = 32
        this.color = color

        this.gravity = 0.5
        this.velocity = 0
        this.jumpDisplacement = -8

        this.birdImg = new Image();
        this.birdImg.src = "./assets/bluebird-midflap.png";
        this.birdImg.onload = () => {
            this.draw();
        };
        this.jumpImg = new Image();
        this.jumpImg.src = "./assets/bluebird-upflap.png";
    }
    
    // method to draw the bird in canvas
    draw(){
        // context.fillStyle = this.color 
        const imageToDraw = this.velocity < 0 ? this.jumpImg : this.birdImg;
        context.drawImage(imageToDraw, this.x, this.y, this.width, this.height);
    }

    jump() {
        this.velocity = this.jumpDisplacement;
        this.draw()
    }

    //method to update the bird on some event in canvas
    update(){
        this.velocity += this.gravity
        this.y += this.velocity
        this.draw()
    }
}