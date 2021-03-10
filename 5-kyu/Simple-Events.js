/**
 * 5 kyu - Simple Events
 * https://www.codewars.com/kata/52d3b68215be7c2d5300022f
 */

class Event {
    constructor() {
        this.events = [];
    }

    subscribe(func) {
        this.events.push(func);
    }

    unsubscribe(func) {
        this.handler = [...this.handler].filter((el) => el !== func);
    }

    emit(...arg) {
        this.events.forEach((func) => {
            func(...arg);
        });
    }
}
