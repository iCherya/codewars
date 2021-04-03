/* eslint-disable no-undef */
/**
 * 3 kyu - Defuse the bombs!
 * https://www.codewars.com/kata/54d558c72a5e542c0600060f
 * */

// 1
Bomb.diffuse(Bomb.key);

// 2
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();

// 3
Bomb.diffuse(this.BombKey);

// 4
const diffuseTheBomb = () => true;
Bomb.diffuse();

// 5
Bomb.diffuse('3.14159');

// 6
const now = new Date();
const fourYearsBefore = new Date();
fourYearsBefore.setYear(now.getFullYear() - 4);
Bomb.diffuse(fourYearsBefore);

// 7
Bomb.diffuse(Object.freeze({ key: 43 }));

// 8
const obj = {
    valueOf: () => {
        if (!this.used) {
            this.used = true;
            return 9;
        }
        return 11;
    }
};
Bomb.diffuse(obj);

// 9
Math.random = function () {
    return {
        valueOf: () => {
            if (!this.used) {
                this.used = true;
                return 0.5;
            }
            return 1;
        }
    };
};
Bomb.diffuse(Bomb.key);

// 10
Array.prototype.valueOf = function () {
    return this.reduce((sum, cur) => sum + cur);
};
Bomb.diffuse(new Buffer('yes').toString('base64'));
