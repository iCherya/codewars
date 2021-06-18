/**
 * 8 kyu - Duck Duck Goose
 * https://www.codewars.com/kata/582e0e592029ea10530009ce
 */
const duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name;
