/**
 * 6 kyu - Array.diff
 * https://www.codewars.com/kata/523f5d21c841566fde000009
 */
const arrayDiff = (a, b) => {
    for (const el of b) {
        if (a.includes(el)) {
            while (a.includes(el)) {
                const idx = a.indexOf(el);

                a.splice(idx, 1);
            }
        }
    }

    return a;
};
