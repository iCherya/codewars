/**
 * 7 kyu - Deodorant Evaporator
 * https://www.codewars.com/kata/5506b230a11c0aeab3000c1f
 */
const evaporator = (content, evaporatePerDay, threshold) => {
    let result = 0;
    const limit = (content * threshold) / 100;

    while (content > limit) {
        content -= (content / 100) * evaporatePerDay;
        result += 1;
    }

    return result;
};
