/**
 * 6 kyu - Find the missing term in an Arithmetic Progression
 * https://www.codewars.com/kata/52de553ebb55d1fca3000371
 */
const findMissing = (list) => {
  const deltaOnListStart = list[1] - list[0];
  const deltaOnListEnd = list[list.length - 1] - list[list.length - 2];

  const sign = deltaOnListStart < 0 || deltaOnListEnd < 0 ? -1 : 1;
  const delta = Math.min(Math.abs(deltaOnListStart), Math.abs(deltaOnListEnd));

  for (let i = 0; i < list.length; i++) {
    const current = list[i];
    const next = list[i + 1];
    const expected = current + delta * sign;

    if (expected !== next) {
      return expected;
    }
  }
};
