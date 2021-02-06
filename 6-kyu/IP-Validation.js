/**
 * 6 kyu - IP Validation
 * https://www.codewars.com/kata/515decfd9dcfc23bb6000006
 */
const isValidIP = (str) => {
    const arr = str.split('.');

    if (arr.length !== 4) return false;

    for (const num of arr) {
        const int = parseInt(num);

        if (isNaN(int)) return false;
        if (int.toString().length !== num.length) return false;
        if (int > 255 || int < 0) return false;
    }

    return true;
};
