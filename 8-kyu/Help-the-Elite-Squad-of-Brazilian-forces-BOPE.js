/**
 * 8 kyu - Help the Elite Squad of Brazilian forces BOPE
 * https://www.codewars.com/kata/5ab52526379d20736b00000e
 */
const magNumber = (info) => {
  const weapons = {
    PT92: 17,
    M4A1: 30,
    M16A2: 30,
    PSG1: 5
  };
  const [weapon, streets] = info;

  return Math.ceil((streets * 3) / weapons[weapon]);
};
