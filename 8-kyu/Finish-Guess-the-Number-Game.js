/**
 * 8 kyu - Finish Guess the Number Game
 * https://www.codewars.com/kata/568018a64f35f0c613000054
 */
class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        if (!this.lives) throw new Error();
        if (n === this.number) return true;

        this.lives -= 1;
        return false;
    }
}
