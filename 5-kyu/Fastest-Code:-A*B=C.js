/**
 * 5 kyu - Fastest Code : A*B=C
 * https://www.codewars.com/kata/5714594d2817ff681c000783
 */
const findAB = (numbers, c) => {
    const visited = {};
    const res = [];

    for (let i = 0; i < numbers.length; i++) {
        let target = c / numbers[i];

        if (visited[target]) {
            res.push([target, numbers[i]]);
        } else if (numbers[i] === 0 && numbers[0] * numbers[i] === c) {
            return [numbers[0], 0];
        }

        visited[numbers[i]] = true;
    }

    if (res.length >= 1) {
        return res.sort((a, b) => a[0] - b[0])[0];
    }

    return null;
};
