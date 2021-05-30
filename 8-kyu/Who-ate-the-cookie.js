/**
 * 8 kyu - Who ate the cookie?
 * https://www.codewars.com/kata/55a996e0e8520afab9000055
 */
const cookie = (x) => {
    let answer = 'Who ate the last cookie? It was ';

    if (typeof x === 'number') answer += 'Monica!';
    else if (typeof x === 'string') answer += 'Zach!';
    else answer += 'the dog!';

    return answer;
};
