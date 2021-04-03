/* eslint-disable no-redeclare */
/**
 * 4 kyu - parseInt() reloaded
 * https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5
 */
const parseInt = (string) => {
    const data = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
        fourteen: 14,
        fifteen: 15,
        sixteen: 16,
        seventeen: 17,
        eighteen: 18,
        nineteen: 19,
        twenty: 20,
        thirty: 30,
        forty: 40,
        fifty: 50,
        sixty: 60,
        seventy: 70,
        eighty: 80,
        ninety: 90
    };

    if (string === 'one million') return 1000000;
    if (string === 'zero') return 0;

    const arr = string.split(' ').filter((el) => el !== 'and');
    let number = 0;

    for (let i = 0; i < arr.length; i++) {
        const currentWord = arr[i];
        const previousWord = arr[i - 1];

        if (currentWord === 'thousand') {
            number *= 1000;
        } else if (currentWord === 'hundred') {
            number += 100 * data[previousWord] - data[previousWord];
        } else if (currentWord.includes('-')) {
            const [dozen, digit] = currentWord.split('-');
            number += data[dozen] + data[digit];
        } else {
            number += data[currentWord];
        }
    }

    return number;
};
