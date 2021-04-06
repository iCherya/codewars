/**
 * 8 kyu - Color Ghost
 * https://www.codewars.com/kata/53f1015fa9fe02cbda00111a */
class Ghost {
    constructor() {
        this.color = this.getColor();
    }

    getColor() {
        const colors = ['white', 'yellow', 'red', 'purple'];
        const random = Math.floor(Math.random() * colors.length);

        return colors[random];
    }
}
