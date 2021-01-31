/**
 * 7 kyu - Don't give me five!
 * https://www.codewars.com/kata/5813d19765d81c592200001a
 */
const dontGiveMeFive = (start, end) => {
    let counter = 0;

    while (start <= end) {
        if (!start.toString().match(/5/)) counter++;
        start++;
    }

    return counter;
};
