/**
 * 8 kyu - Playing with cubes II
 * https://www.codewars.com/kata/55c0ac142326fdf18d0000af
 */
class Cube {
    constructor(side = 0) {
        this.side = side;
    }

    getSide() {
        return this.side;
    }

    setSide(n) {
        if (!Number.isNaN(n)) this.side = Math.abs(n);
    }
}
