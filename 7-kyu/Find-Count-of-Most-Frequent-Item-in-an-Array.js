/**
 * 7 kyu - Find Count of Most Frequent Item in an Array
 * https://www.codewars.com/kata/56582133c932d8239900002e
 */
const mostFrequentItemCount = (collection) =>
    Object.values(
        collection.reduce((acc, curr) => {
            if (!acc[curr]) acc[curr] = 0;
            acc[curr] += 1;

            return acc;
        }, {})
    ).sort((a, b) => b - a)[0] || 0;
