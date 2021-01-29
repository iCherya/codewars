/**
 * 4 kyu - Twice linear
 * https://www.codewars.com/kata/5672682212c8ecf83e000050
 */
const dblLinear = (n) => {
    const list = [1];
    let left = 0;
    let right = 0;

    for (let i = 0; i < n; i++) {
        const nextLeft = 2 * list[left] + 1;
        const nextRight = 3 * list[right] + 1;

        if (nextLeft < nextRight) {
            list.push(nextLeft);
            left++;
        } else if (nextLeft > nextRight) {
            list.push(nextRight);
            right++;
        } else {
            list.push(nextLeft);
            left++;
            right++;
        }
    }

    return list[n];
};
