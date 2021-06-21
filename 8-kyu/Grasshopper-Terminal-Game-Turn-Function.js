/* eslint-disable no-undef */
/**
 * 8 kyu - Grasshopper - Terminal Game Turn Function
 * https://www.codewars.com/kata/56019d3b2c39ccde76000086
 */
const doTurn = () => {
    rollDice();
    move();
    combat();
    getCoins();
    buyHealth();
    printStatus();
};
