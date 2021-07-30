// import food.js file
const { foodX, foodY, gameOver } = require('./food');

/**
 * test 1: X-coordinate not to be 51.
 */
test('test 1: X-coordinate not to be 51.', () => {
    expect(foodX()).not.toBe(51);
});

/**
 * test 2: X-coordinate not to be greater than 51.
 */
test(' test 2: X-coordinate not to be greater than 51.', () => {
    expect(foodX()).not.toBeGreaterThan(51);
});

/**
 * test 3: X-coordinate to be lessthan 51
 */
test('test 3: X-coordinate to be lessthan 51', () => {
    expect(foodX()).toBeLessThan(51);
});

/**
 * test 4: X-coordinate to be lessthan or equal 51
 */
test('test 4: X-coordinate to be lessthan or equal 51', () => {
    expect(foodX()).toBeLessThanOrEqual(50);
});

/**
 * test 5: X-coordinate to be Greater than or equal 51
 */
test('test 5: X-coordinate to be Greater than or equal 51', () => {
    expect(foodX()).not.toBeGreaterThanOrEqual(50);
});

/**
 * test 6: X-coordinate Generale testing
 */
test('test 6: Generale Testing', () => {
    expect(foodX()).not.toBeNull();
    expect(foodX()).toBeDefined();
    expect(foodX()).not.toBeUndefined();
});

/**
 * test 7: Y-coordinate not to be 51.
 */
test('test 3: Y-coordinate not to be 51.', () => {
    expect(foodY()).not.toBe(51);
});

/**
 * test 8: Y-coordinate not to be greater than 51.
 */
test('test 3: Y-coordinate not to be greater than 51.', () => {
    expect(foodY()).not.toBeGreaterThan(51);
});

/**
 * test 9: Y-coordinate to be lessthan 51
 */
test('test 9: Y-coordinate to be lessthan 51', () => {
    expect(foodY()).toBeLessThan(51);
});

/**
 * test 10: Y-coordinate to be lessthan or equal 51
 */
test('test 10: Y-coordinate to be lessthan or equal 51', () => {
    expect(foodY()).toBeLessThanOrEqual(50);
});

/**
 * test 11: Y-coordinate to be Greater than or equal 51
 */
test('test 11: Y-coordinate to be Greater than or equal 51', () => {
    expect(foodY()).not.toBeGreaterThanOrEqual(51);
});

/**
 * test 12: Y-coordinate Generale testing
 */
test('test 12: Generale Testing', () => {
    expect(foodY()).not.toBeNull();
    expect(foodY()).toBeDefined();
    expect(foodY()).not.toBeUndefined();
});

/**
 * Testing for Game Over:
 */

/**
 * Game Over :test 1 :snake head X-coordinate is less than zero
 */
test('Game Over :test 1 :snake head X-coordinate is less than zero', () => {
    let snakeX = -1;
    let snakeY = 0;
    const snakeW = 10;
    const snakeH = 10;
    for (let i = 0; i <= 50; i++) {
        snakeY = i;
        expect(gameOver(snakeX, snakeY, snakeW, snakeH)).toBe(1);
    }
});

/**
 * Game Over :test 2 :snake head X-coordinate is less than zero
 */
 test('Game Over :test 2 :snake head X-coordinate is less than zero', () => {
    let snakeX = -1;
    let snakeY = 0;
    const snakeW = 10;
    const snakeH = 10;
    for (let i = 0; i <= 50; i++) {
        snakeY = i;
        expect(gameOver(snakeX, snakeY, snakeW, snakeH)).not.toBe(0);
    }
});

/**
 * Game Over :test 3 :snake head Y-coordinate is less than zero
 */
test('Game Over :test 3 :snake head Y-coordinate is less than zero', () => {
    let snakeX = 0;
    let snakeY = -1;
    const snakeW = 10;
    const snakeH = 10;
    for (let i = 0; i <= 50; i++) {
        snakeX = i;
        expect(gameOver(snakeX, snakeY, snakeW, snakeH)).toBe(1);
    }
});

/**
 * Game Over :test 4 :snake head Y-coordinate is less than zero
 */
 test('Game Over :test 4 :snake head Y-coordinate is less than zero', () => {
    let snakeX = 0;
    let snakeY = -1;
    const snakeW = 10;
    const snakeH = 10;
    for (let i = 0; i <= 50; i++) {
        snakeX = i;
        expect(gameOver(snakeX, snakeY, snakeW, snakeH)).not.toBe(0);
    }
});

/**
 * Game Over :test 5 :snake head X-coordinate is greater than 50
 */
test('Game Over :test 5 :snake head X-coordinate is greater than 50', () => {
    let snakeX = 51;
    let snakeY = 0;
    const snakeW = 10;
    const snakeH = 10;
    for (let i = 0; i <= 50; i++) {
        snakeY = i;
        expect(gameOver(snakeX, snakeY, snakeW, snakeH)).toBe(1);
    }
});
/**
 * Game Over :test 6 :snake head X-coordinate is greater than 50
 */
 test('Game Over :test 6 :snake head X-coordinate is greater than 50', () => {
    let snakeX = 51;
    let snakeY = 0;
    const snakeW = 10;
    const snakeH = 10;
    for (let i = 0; i <= 50; i++) {
        snakeY = i;
        expect(gameOver(snakeX, snakeY, snakeW, snakeH)).not.toBe(0);
    }
});


/**
 * Testing for Game is not Over:
 */

/**
 * Game Over :test 1 :snake head X-coordinate is greater than or equal to zero
 */
test('Game is not Over :test 1 :snake head X-coordinate and Y-coordinate greater than or equal to zero but less than 50', () => {
    let snakeX = 0;
    let snakeY = 0;
    const snakeW = 10;
    const snakeH = 10;
    for (let i = 0; i < 50; i++) {
        snakeX = i;

        for (let j = 0; j < 50; j++) {
            snakeY=j;
            expect(gameOver(snakeX, snakeY, snakeW, snakeH)).toBe(0);
        }
    }
});

test('Game is not Over :test 2 :snake head X-coordinate and Y-coordinate greater than or equal to zero but less than 50', () => {
    let snakeX = 0;
    let snakeY = 0;
    const snakeW = 10;
    const snakeH = 10;
    for (let i = 0; i < 50; i++) {
        snakeX = i;

        for (let j = 0; j < 50; j++) {
            snakeY=j;
            expect(gameOver(snakeX, snakeY, snakeW, snakeH)).not.toBe(1);
        }
    }
});

