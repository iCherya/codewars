/**
 * 6 kyu - IQ Test
 * https://www.codewars.com/kata/552c028c030765286c00007d
 */
const iqTest = (numbers) => {
    const arr = numbers.split(' ').map(Number);
    const even = [];
    const odd = [];

    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        number % 2 === 0 ? even.push(i + 1) : odd.push(i + 1);
    }

    return even.length === 1 ? even[0] : odd[0];
};
