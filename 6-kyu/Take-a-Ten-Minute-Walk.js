/**
 * 6 kyu - Take a Ten Minute Walk
 * https://www.codewars.com/kata/54da539698b8a2ad76000228
 */
function isValidWalk(walk) {
    const map = {
        n: 0,
        s: 0,
        e: 0,
        w: 0
    };

    for (const direction of walk) {
        map[direction]++;
    }

    return map.n === map.s && map.e === map.w && walk.length === 10;
}
