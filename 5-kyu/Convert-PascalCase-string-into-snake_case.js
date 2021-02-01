/**
 * 5 kyu - Convert PascalCase string into snake_case
 * https://www.codewars.com/kata/529b418d533b76924600085d
 */
const toUnderscore = (string) => {
    if (typeof string === 'number') return string.toString();

    return string
        .replace(/([A-Z])/g, '_$1')
        .toLowerCase()
        .slice(1);
};
