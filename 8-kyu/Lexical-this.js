/**
 * 8 kyu - Lexical this
 * https://www.codewars.com/kata/55a13556ca4a6d0ab4000003
 */
const Person = () => ({
    _name: 'Leroy',
    _friends: [],
    fillFriends(arr) {
        this._friends.push(...arr);
    }
});
