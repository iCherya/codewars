/**
 * 8 kyu - Age Range Compatibility Equation
 * https://www.codewars.com/kata/5803956ddb07c5c74200144e
 */
const datingRange = (age) => {
    let min, max;

    if (age <= 14) {
        min = age - 0.1 * age;
        max = age + 0.1 * age;
    } else {
        min = age / 2 + 7;
        max = (age - 7) * 2;
    }

    return `${Math.floor(min)}-${Math.floor(max)}`;
};
