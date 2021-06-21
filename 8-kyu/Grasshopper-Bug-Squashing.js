/* eslint-disable no-undef */
/**
 * 8 kyu - Grasshopper - Bug Squashing
 * https://www.codewars.com/kata/56214b6864fe8813f1000019
 */
const health = 100;
const position = 0;
const coins = 0;

function main() {
    rollDice();
    move();
    combat();
    getCoins();
    buyHealth();
    printStatus();
}
