/**
 * 4 kyu - Range Extraction
 * https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
 */
function solution(list) {
    list.sort((a, b) => a - b);
    const result = [[list[0]]];

    for (let i = 1; i < list.length; i++) {
        const prev = list[i - 1];
        const curr = list[i];

        if (prev + 1 !== curr) {
            result.push([curr]);
        } else {
            result[result.length - 1].push(curr);
        }
    }

    let answer = '';
    for (const item of result) {
        if (item.length === 1) {
            answer += item + ',';
        } else if (item.length === 2) {
            answer += item.join(',') + ',';
        } else {
            answer += item[0] + '-' + item[item.length - 1] + ',';
        }
    }

    return answer.slice(0, -1);
}
