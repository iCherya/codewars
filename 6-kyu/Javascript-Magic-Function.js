/**
 * 6 kyu - Javascript Magic Function
 * https://www.codewars.com/kata/55caf9ff29c318407c00001f
 */
function MagicFunction(...args) {
    const sum = args.reduce((acc, curr) => acc + (Number(curr) || 0), 0);
    const func = MagicFunction.bind({}, sum);
    func.valueOf = () => sum;

    return func;
}
