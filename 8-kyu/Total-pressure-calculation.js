/**
 * 8 kyu - Total pressure calculation
 * https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a
 */
const solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) =>
    ((givenMass1 / molarMass1 + givenMass2 / molarMass2) * 0.082 * (temp + 273.15)) / volume;
