/**
 * 7 kyu - Remove the minimum
 * https://www.codewars.com/kata/563cf89eb4747c5fb100001b
 */
const removeSmallest = (numbers) => {
    const min = Math.min(...numbers);
    return numbers.filter((_, idx, arr) => idx !== arr.indexOf(min));
};
