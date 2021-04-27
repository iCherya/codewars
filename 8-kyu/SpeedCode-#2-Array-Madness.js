/**
 * 8 kyu - SpeedCode #2 - Array Madness
 * https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1
 */
const arrayMadness = (a, b) => {
    const sumArrPower = (arr, pow) => arr.reduce((acc, curr) => acc + curr ** pow, 0);

    return sumArrPower(a, 2) > sumArrPower(b, 3);
};
