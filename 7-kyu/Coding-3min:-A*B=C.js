/**
 * 7 kyu - Coding 3min : A*B=C
 * https://www.codewars.com/kata/5714803d2817ffce17000a35
 */
function findAB(numbers, c) {
    for (let i = 0; i < numbers.length; i++) {
        let target = c / numbers[i];
        if (target === -0) target = 0;

        if (numbers.includes(target) && numbers.findIndex((el) => el === target) !== i) {
            return [numbers[i], target];
        }
    }

    return null;
}
