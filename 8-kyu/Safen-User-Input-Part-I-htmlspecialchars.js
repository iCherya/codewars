/**
 * 8 kyu - Safen User Input Part I - htmlspecialchars
 * https://www.codewars.com/kata/56bcaedfcf6b7f2125001118
 */
const htmlspecialchars = (formData) => {
    const map = { '<': '&lt;', '>': '&gt;', '"': '&quot;', '&': '&amp;' };
    return formData
        .split('')
        .map((el) => map[el] || el)
        .join('');
};
