/**
 * 7 kyu - Two fighters, one winner.
 * https://www.codewars.com/kata/577bd8d4ae2807c64b00045b
 */
const declareWinner = (fighter1, fighter2, firstAttacker) => {
    while (fighter1.health > 0 && fighter2.health > 0) {
        fighter2.health -= fighter1.damagePerAttack;
        fighter1.health -= fighter2.damagePerAttack;
    }

    if (fighter1.health <= 0 && fighter2.health <= 0) return firstAttacker;

    return fighter1.health <= 0 ? fighter2.name : fighter1.name;
};
