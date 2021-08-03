/**
 * 8 kyu - Find the force of gravity between two objects
 * https://www.codewars.com/kata/5b609ebc8f47bd595e000627
 */
const solution = ([obj1Mass, obj2Mass, distance], [obj1MassUnit, obj2MassUnit, distanceUnit]) => {
    const getCUnit = (unit) => {
        const map = {
            ft: 0.3048,
            μm: 1e-6,
            mm: 1e-3,
            cm: 1e-2,
            lb: 0.453592,
            μg: 1e-9,
            mg: 1e-6,
            g: 1e-3,
            kg: 1,
            m: 1
        };

        return map[unit];
    };

    return (
        (6.67 * 1e-11 * getCUnit(obj1MassUnit) * obj1Mass * getCUnit(obj2MassUnit) * obj2Mass) /
        (getCUnit(distanceUnit) * distance) ** 2
    );
};
