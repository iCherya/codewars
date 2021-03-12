/**
 * 6 kyu - Simple Fun #290: Sum Of Threes
 * https://www.codewars.com/kata/591d3375e51f4a0940000052
 */
const sumOfThrees = (number) => {
    const trinaryArr = number.toString(3).split('').reverse();

    let result = '';

    for (let i = 0; i < trinaryArr.length; i += 1) {
        const current = trinaryArr[i];

        if (current === '2') {
            return 'Impossible';
        }

        if (current === '1') {
            result = `3^${i}+${result}`;
        }
    }

    return result.slice(0, -1);
};
