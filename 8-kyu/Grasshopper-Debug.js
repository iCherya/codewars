/**
 * 8 kyu - Grasshopper - Debug
 * https://www.codewars.com/kata/55cb854deb36f11f130000e1
 */
const weatherInfo = (temp) => {
    const c = convertToCelsius(temp);
    if (c <= 0) return c + ' is freezing temperature';
    else return c + ' is above freezing temperature';
};

const convertToCelsius = (temperature) => (temperature - 32) * (5 / 9);
