/**
 * 8 kyu - Filling an array (part 1)
 * https://www.codewars.com/kata/571d42206414b103dc0006a1
 */
const arr = (number) => {
    const result = [];

    let i = 0;
    while (i < number) {
        result.push(i);
        i += 1;
    }

    return result;
};
