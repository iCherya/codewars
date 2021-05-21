/**
 * 8 kyu - Thinkful - Number Drills: Blue and red marbles
 * https://www.codewars.com/kata/5862f663b4e9d6f12b00003b
 */
const guessBlue = (blueStart, redStart, bluePulled, redPulled) => {
    const blueTotal = blueStart - bluePulled;
    const redTotal = redStart - redPulled;

    return blueTotal / (blueTotal + redTotal);
};
