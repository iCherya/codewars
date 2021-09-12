/**
 * 6 kyu - Common array elements
 * https://www.codewars.com/kata/5a6225e5d8e145b540000127
 */
const common = (a, b, c) => {
    const getCount = (arr) =>
        arr.reduce((acc, curr) => {
            if (!acc[curr]) acc[curr] = 0;
            acc[curr] += 1;

            return acc;
        }, {});

    const [b1, c1] = [b, c].map((el) => getCount(el));

    return a
        .map((num) => {
            if (b1[num] && c1[num]) {
                b1[num] -= 1;
                c1[num] -= 1;

                return num;
            }

            return 0;
        })
        .reduce((acc, curr) => acc + curr, 0);
};
