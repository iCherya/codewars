/**
 * 6 kyu - Sum #1
 * https://www.codewars.com/kata/58733d9b0e9cf3a824000050
 */
const sum = (num1) => {
    if (num1 === undefined) return 0;

    return (num2) => {
        if (num2 === undefined) return num1;

        return sum(num1 + num2);
    };
};
