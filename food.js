/**
 * function :generate the food for snake
 * check X-Coordinate of food,not out of bound
 * @returns x-value
 */
function foodX() {
    let food = {
        x: Math.round(Math.random() * (500 / 10) + 1),
        y: Math.round(Math.random() * (500 / 10) + 1)
    }

    return food.x;
}

/**
 * check Y-Coordinate of food,not out of bound
 * @returns y-value
 */
function foodY() {
    let food = {
        x: Math.round(Math.random() * (500 / 10) + 1),
        y: Math.round(Math.random() * (500 / 10) + 1)
    }

    return food.y;
}

/**
 * Game over :if snakeX < 0 OR snakeY <0 OR snakeX >= 500 / snakeW OR snakeY >= 500 / snakeH
 * @param {snake head X-coordinate} snakeX 
 * @param {snake head Y-coordinate} snakeY 
 * @param {snake width} snakeW 
 * @param {snake height} snakeH 
 * @returns 
 */
function gameOver(snakeX,snakeY,snakeW,snakeH){
    if(snakeX < 0 || snakeY < 0 || snakeX >= 500 / snakeW || snakeY >= 500 / snakeH){
        return 1;
    }
    return 0;
}

//export Functions
module.exports = {
    foodX: foodX,
    foodY: foodY,
    gameOver:gameOver
};