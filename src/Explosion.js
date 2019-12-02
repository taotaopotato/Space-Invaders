
class Explosion {
    constructor(position, size) {
        this.position = position;
        this.size = size;
    }

    draw(ctx) {
        let explosion = document.getElementById("explosion_pic")
        ctx.drawImage(explosion, this.position.x, this.position.y, this.size, this.size);
    }
}