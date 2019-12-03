// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.
// Example
// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] integer n
// A ticket number represented as a positive integer with an even number of digits.
// Guaranteed constraints:
// 10 ≤ n < 106.
// [output] boolean
// true if n is a lucky ticket number, false otherwise.

const convertToStringArray = (n) => Array.from(String(n));

const splitString = (n) => {
  const len = n.length;
  const half = len / 2;
  const firstHalf = [...n].splice(0, half).join('');
  const secondHalf = [...n].splice(half, half).join('');
  return ([firstHalf, secondHalf]);
};

const sumString = (n) => {
  let sum = 0;
  for (const character of n) {
    sum += Number(character);
  }
  return sum;
};

const isLucky = (n) => {
  if (n % 2 !== 0) return false;
  const stringN = convertToStringArray(n);
  const [first, second] = splitString(stringN);
  return sumString(first) === sumString(second);
};

// console.log(isLucky(1230));
