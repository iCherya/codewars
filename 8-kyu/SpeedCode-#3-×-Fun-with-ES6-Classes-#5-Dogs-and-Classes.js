/**
 * 8 kyu - SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes
 * https://www.codewars.com/kata/56ff9b53140fcca90b000530
 */
// eslint-disable-next-line no-undef
class Labrador extends Dog {
    constructor(name, age, gender, master) {
        super(name, age, gender, 'Labrador', 'Large', master, true);
    }
}
