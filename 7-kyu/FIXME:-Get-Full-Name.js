/**
 * 7 kyu - FIXME: Get Full Name
 * https://www.codewars.com/kata/597c684822bc9388f600010f
 */
class Dinglemouse {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`.trim();
    }
}
