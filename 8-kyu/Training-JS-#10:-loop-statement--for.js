/**
 * 8 kyu - Training JS #10: loop statement --for
 * https://www.codewars.com/kata/5721a78c283129e416000999
 */
const pickIt = (arr) => {
    const odd = [],
        even = [];

    for (const item of arr) {
        item % 2 ? odd.push(item) : even.push(item);
    }

    return [odd, even];
};
