/**
 * 8 kyu - Smallest unused ID
 * https://www.codewars.com/kata/55eea63119278d571d00006a
 */
const nextId = (ids) => {
    ids = Array.from(new Set(ids)).sort((a, b) => a - b);

    for (let i = 0; i < ids.length; i++) {
        if (i !== ids[i]) return i;
    }

    return ids[ids.length - 1] + 1;
};
