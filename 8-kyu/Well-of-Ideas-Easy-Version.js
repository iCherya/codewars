/**
 * 8 kyu - Well of Ideas - Easy Version
 * https://www.codewars.com/kata/57f222ce69e09c3630000212
 */
const well = (x) => {
    const hash = {};
    for (const idea of x) {
        if (!hash[idea]) hash[idea] = 0;
        hash[idea] += 1;
    }

    const count = hash.good;

    if (!count) return 'Fail!';
    if (count <= 2) return 'Publish!';
    return 'I smell a series!';
};
