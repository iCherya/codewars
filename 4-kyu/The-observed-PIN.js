/**
 * 4 kyu - The observed PIN
 * https://www.codewars.com/kata/5263c6999e0f40dee200059d
 */
const getPINs = (observed) => {
    const adjacent = {
        1: ['1', '2', '4'],
        2: ['1', '2', '5', '3'],
        3: ['2', '3', '6'],
        4: ['1', '4', '5', '7'],
        5: ['2', '4', '5', '6', '8'],
        6: ['3', '5', '6', '9'],
        7: ['4', '7', '8'],
        8: ['7', '5', '8', '9', '0'],
        9: ['6', '8', '9'],
        0: ['0', '8']
    };

    const work = observed.split('');
    work.forEach((value, key) => {
        work[key] = adjacent[value];
    });

    const result = [];

    const recurse = (current, depth) => {
        if (current.length === observed.length) {
            result.push(current);
            return;
        }
        for (let i = 0; i < work[depth].length; i += 1) {
            recurse((current += work[depth][i]), depth + 1);
            current = current.slice(0, current.length - 1);
        }
    };

    recurse('', 0);
    return result;
};
