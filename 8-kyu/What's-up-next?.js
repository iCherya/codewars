/**
 * 8 kyu - What's up next?
 * https://www.codewars.com/kata/542ebbdb494db239f8000046
 */
const nextItem = (xs, item) => {
    let flag = false;

    for (const element of xs) {
        if (flag) return element;
        if (element === item) flag = true;
    }
};
