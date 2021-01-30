/**
 * 6 kyu - Sort the odd
 * https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
 */
const sortArray = (arr) => {
    const odd = [];
    const result = arr.map((num) => {
        if (num % 2 !== 0) {
            odd.push(num);
            return null;
        }

        return num;
    });

    odd.sort((a, b) => a - b);

    let j = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] === null) {
            result[i] = odd[j];
            j++;
        }
    }

    return result;
};
