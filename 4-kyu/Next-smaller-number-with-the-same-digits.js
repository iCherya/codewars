/**
 * 4 kyu - Next smaller number with the same digits
 * https://www.codewars.com/kata/5659c6d896bc135c4c00021e
 */
const nextSmaller = (num) => {
    let arr = num.toString().split('').reverse();
    let outputString = '';

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                const tempArr = [...arr.splice(j, 1), ...arr.splice(0, i).sort().reverse()];
                outputString += arr.reverse().concat(tempArr).join('');
                return outputString.length === outputString.replace(/^0+/, '').length
                    ? outputString * 1
                    : -1;
            }
        }
    }

    return -1;
};
