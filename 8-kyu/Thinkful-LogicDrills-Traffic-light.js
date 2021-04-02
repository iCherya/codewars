/**
 * 8 kyu - Thinkful - Logic Drills: Traffic light
 * https://www.codewars.com/kata/58649884a1659ed6cb000072
 */
const updateLight = (current) => {
    const lights = {
        green: 'yellow',
        yellow: 'red',
        red: 'green'
    };

    return lights[current];
};
