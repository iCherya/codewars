/**
 * 5 kyu - RGB To Hex Conversion
 * https://www.codewars.com/kata/513e08acc600c94f01000001
 */
const rgb = (...arg) => {
    const valid = arg.map((el) => {
        if (el < 0) return 0;
        if (el > 255) return 255;
        return el;
    });

    return valid.reduce((acc, curr) => acc + curr.toString(16).toUpperCase().padStart(2, '0'), '');
};
