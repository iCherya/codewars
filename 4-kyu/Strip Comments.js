/**
 * 4 kyu - Strip Comments
 * https://www.codewars.com/kata/51c8e37cee245da6b40000bd
 */
const solution = (input, markers) => {
    const arr = input.split('\n');
    const result = [];

    main: for (let string of arr) {
        let resStr = '';

        for (let i = 0; i < string.length; i++) {
            if (markers.includes(string[i])) {
                result.push(resStr);
                continue main;
            } else {
                resStr += string[i];
            }
        }

        result.push(resStr);
    }

    return result.map((el) => el.trim()).join('\n');
};
