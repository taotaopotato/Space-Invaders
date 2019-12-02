class Ship {
    constructor(GAME_WIDTH, GAME_HEIGHT) {
        this.gameWidth = GAME_WIDTH;
        this.gameHeight = GAME_HEIGHT;
        this.size = 100;
        this.speed = {
            x: 0,
            y: 0
        }
        this.maxSpeed = 5;
        this.position = {
            x: this.gameWidth / 2 - this.size / 2,
            y: this.gameHeight - 2 * this.size
        }
    }
    draw(ctx) {
        let shipImage = document.getElementById("ship_pic")
        ctx.drawImage(shipImage, this.position.x, this.position.y, this.size, this.size);
    }
    ///////////////////////////////// Move Commands
    moveLeft() {
        this.speed.x = -this.maxSpeed;
    }
    moveRight() {
        this.speed.x = this.maxSpeed;
    }
    moveUp() {
        this.speed.y = -this.maxSpeed;
    }
    moveDown() {
        this.speed.y = this.maxSpeed;
    }
    ///////////////////////////////////////////////////
    Fire() {
        let newBullet = new Bullet(this.position, this.size);
        bullets.push(newBullet);
        console.log(bullets.length);
    }

    stopX() {
        this.speed.x = 0;
    }
    stopY() {
        this.speed.y = 0;
    }

    update() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        this.checkCollisionWithWall();
    }
    ////////////////////////////////////////// Collision With Wall
    checkCollisionWithWall() {
        if (this.position.x <= 0) {
            this.position.x = 0;
        }
        if (this.position.x + this.size >= this.gameWidth) {
            this.position.x = this.gameWidth - this.size;
        }
        if (this.position.y <= 0) {
            this.position.y = 0;
        }
        if (this.position.y + this.size >= this.gameHeight) {
            this.position.y = this.gameHeight - this.size;
        }
    }
}