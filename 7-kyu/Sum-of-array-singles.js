/**
 * 7 kyu - Sum of array singles
 * https://www.codewars.com/kata/59f11118a5e129e591000134
 */
const repeats = (arr) => {
    const visited = {};

    arr.forEach((number) => {
        if (!visited[number]) visited[number] = 0;
        visited[number] += 1;
    });

    return Object.entries(visited)
        .filter(([, count]) => count === 1)
        .map(([number]) => Number(number))
        .reduce((acc, curr) => acc + curr, 0);
};
