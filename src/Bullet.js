class Bullet {
    constructor(position, size) {
        this.toBeDeleted = false;
        this.size = 50;
        this.speed = -10;
        this.position = {
            x: position.x + size / 4,
            y: position.y - size / 2
        }
    }

    draw(ctx) {
        let bulletImage = document.getElementById("bullet_pic")
        ctx.drawImage(bulletImage, this.position.x, this.position.y, this.size, this.size);
    }

    update(bug) {
        this.position.y += this.speed;
        if (this.position.y + this.size < 0) {
            this.toBeDeleted = true;
        }
        this.checkCollisionWithBug(ctx, bug);
    }

    checkCollisionWithBug(ctx, bug) {
        if (this.position.x <= bug.position.x + 45 && this.position.x + this.size >= bug.position.x && this.position.y >= bug.position.y - bug.size && this.position.y <= bug.position.y + bug.size) {
            bug.toBeDeleted = true;
            this.toBeDeleted = true;
            let explosion = new Explosion(bug.position, bug.size);
            console.log(bug.position.x);
            console.log(bug.position.y);
            explosion.draw(ctx);
            score += 100;
            
        }
    }
}
