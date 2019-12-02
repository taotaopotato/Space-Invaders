class Bug {
    constructor(GAME_WIDTH, GAME_HEIGHT) {
        this.gameWidth = GAME_WIDTH;
        this.gameHeight = GAME_HEIGHT;
        this.toBeDeleted = false;
        this.size = 75;
        this.position = {
            x: this.getRandomInt((this.gameWidth - this.size)),
            y: this.getRandomInt((this.gameHeight / 4))
        }
        this.speed = 1;
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    draw(ctx) {
        let bugImage = document.getElementById("bug_pic")
        ctx.drawImage(bugImage, this.position.x, this.position.y, this.size, this.size);
    }

    update() {
        this.position.y += this.speed;
        this.checkForBottom();
        this.checkLevelChange();
    }

    checkForBottom() {
        if (this.position.y >= this.gameHeight) {
            this.toBeDeleted = true;
            lives --;
        }
    }

    checkLevelChange() {
        if (score > 500) {
            this.speed = 2;
        }
        else if (score > 1000) {
            this.speed = 3;
        }
        else if (score > 1500) {
            this.speed = 4;
        }
        else if (score > 2000) {
            this.speed = 5;
        }
        else if (score > 2500) {
            this.speed = 6;
        }
    }
}