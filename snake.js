const cvs = document.getElementById("canvas");
const gameOver=document.getElementById("gameOver");
const restart=document.getElementById("restart");
const ctx = cvs.getContext("2d");
const snakeW = 10;
const snakeH = 10;

let dir = "down";

function drowSnake(x, y) {
    ctx.fillStyle = "white";
    ctx.fillRect(x * snakeW, y * snakeH, snakeW, snakeH);
    ctx.fillStyle = "black";
    ctx.strokeRect(x * snakeW, y * snakeH, snakeW, snakeH);
}
// drowSnake(2,4);

const len = 4;
snake = [];

for (let i = len - 1; i >= 0; i--) {
    snake.push({
        x: i,
        y: 0
    })
}

//arrow key event listener
document.addEventListener("keydown", dirControl);
function dirControl(e) {
    if (e.keyCode == 37 && dir != "right") {
        dir = "left";
    } else if (e.keyCode == 39 && dir != "left") {
        dir = "right";
    } else if (e.keyCode == 38 && dir != "down") {
        dir = "up";
    } else if (e.keyCode == 40 && dir != "up") {
        dir = "down";
    }
}

//for food

let food = {
    x: Math.round(Math.random() * (cvs.width / snakeW) + 1),
    y: Math.round(Math.random() * (cvs.height / snakeH) + 1)
}

function drowFood(x, y) {
    ctx.fillStyle = "red";
    ctx.fillRect(x * snakeW, y * snakeH, snakeW, snakeH);
    ctx.fillStyle = "black";
    ctx.strokeRect(x * snakeW, y * snakeH, snakeW, snakeH);
}
//drow function
function drow() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);

    for (let i = 0; i < snake.length; i++) {
        let X = snake[i].x;
        let Y = snake[i].y;
        drowSnake(X, Y);
    }

    drowFood(food.x, food.y);


    //snake head
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (snakeX < 0 || snakeY < 0 || snakeX >= cvs.width / snakeW || snakeY >= cvs.height / snakeH) {
        // alert("Game Over");
        gameOver.style.visibility="visible";
        restart.style.visibility="visible";
        restart.addEventListener('click',(e)=>{
            location.reload(true);
          })
    }

    if (dir == "right") {
        snakeX++;
    } else if (dir == "left") {
        snakeX--;
    } else if (dir == "up") {
        snakeY--;
    } else if (dir == "down") {
        snakeY++;
    }

    let newHead;
    if (snakeX == food.x && snakeY == food.y) {
        food = {
            x: Math.round(Math.random() * (cvs.width / snakeW - 1) + 1),
            y: Math.round(Math.random() * (cvs.height / snakeH - 1) + 1)
        }
        newHead = {
            x: snakeX,
            y: snakeY
        }

    } else {

        snake.pop()
        newHead = {
            x: snakeX,
            y: snakeY
        }

    }


    //new head

    snake.unshift(newHead);
}

setInterval(drow, 100);
