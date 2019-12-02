
class InputHandler {
    constructor(ship) {
        document.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
                case 37:
                    ship.moveLeft();
                    break;
                case 39:
                    ship.moveRight();
                    break;
                case 38:
                    ship.moveUp();
                    break;
                case 40:
                    ship.moveDown();
                    break;
                case 27:
                    break;
                case 32:
                    ship.Fire();
                    break;

            }
        });
        document.addEventListener('keyup', (event) => {
            switch (event.keyCode) {
                case 37:
                    if (ship.speed.x < 0) ship.stopX();
                    break;
                case 39:
                    if (ship.speed.x > 0) ship.stopX();
                    break;
                case 38:
                    if (ship.speed.y < 0) ship.stopY();
                    break;
                case 40:
                    if (ship.speed.y > 0) ship.stopY()
                    break;
                case 27:
                    break;
                case 32:
                    break;
            }
        });
    }
}


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
///////////////////////      The Real Stuff     ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


const GAME_WIDTH = 550;
const GAME_HEIGHT = 500;

let c = document.getElementById("gameCanvas");
let ctx = c.getContext("2d");






let score = 0;
let lives = 3;
let bullets = [];
let bugs = [];
let ship = new Ship(GAME_WIDTH, GAME_HEIGHT);
let input = new InputHandler(ship)
let bug = new Bug(GAME_WIDTH, GAME_HEIGHT);
bugs.push(bug);


ctx.font = "30px Arial";
ctx.fillStyle = "white"
function gameLoop() {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ship.update();
    ship.draw(ctx);
    bullets.forEach(drawUpdateBullet);
    bugs.forEach(drawUpdateAddNewBug);
    checkBug();
    requestAnimationFrame(gameLoop)
    ctx.fillText("                             " + score, 10, 50); 
    ctx.fillText("                                                   " + lives + " " + "Lives", 10, 50); 

}
function drawUpdateBullet(item, index) {
    if (item.toBeDeleted == false) {
        item.draw(ctx);
        item.update(bugs[0]);
    }else
    {
        bullets.shift();
    }
}

function drawUpdateAddNewBug(item, index) {
    if (item.toBeDeleted == false) {
        item.draw(ctx);
        item.update();
    }
    else
    {
        bugs.shift();
    }
}







function checkBug() {
    if (bugs.length == 0) {
            let bug = new Bug(GAME_WIDTH, GAME_HEIGHT);
            bugs.push(bug);
    }

}
requestAnimationFrame(gameLoop);