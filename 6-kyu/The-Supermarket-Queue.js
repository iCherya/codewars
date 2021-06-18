/**
 * 6 kyu - The Supermarket Queue
 * https://www.codewars.com/kata/57b06f90e298a7b53d000a86
 */
const queueTime = (customers, n) => {
    if (!customers.length) return 0;
    if (n === 1) return customers.reduce((acc, curr) => acc + curr, 0);
    if (n >= customers.length) return Math.max(...customers);

    const queue = new Array(n).fill(0);

    for (const person of customers) {
        const minQueue = Math.min(...queue);
        const minQueueIndex = queue.indexOf(minQueue);
        queue[minQueueIndex] += person;
    }

    return Math.max(...queue);
};
