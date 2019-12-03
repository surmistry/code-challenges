// You are given an array of integers. On each move you are allowed to increase
// exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
// Example
// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3.
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] array.integer inputArray
// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 105,
// -105 ≤ inputArray[i] ≤ 105.
// [output] integer
// The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
// It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.

/** @todo: Didn't require strictly increasing, just until each index was greater than previous */

const log = (...message) => console.log(...message);
const findIncreasingDifference = (first, next) => ((first + 1) - next);

const compareValues = (index, values) => {
  let tempDifference = 0;
  if (index < values.length - 1) {
    const current = values[index];
    const next = values[index + 1];
    if (next <= current) {
      tempDifference = findIncreasingDifference(current, next);

      values.splice(index + 1, 1, next + tempDifference);
    }
  }
  return [values, tempDifference];
};

const sumDifferences = (allDifferences) => {
  let sum = 0;
  for (const value of allDifferences) {
    sum += Number(value);
  }
  return sum;
};

const arrayChange = (inputArray) => {
  // let inputCopy = [...inputArray];
  let difference = 0;
  const allDifferences = [];
  for (const [index, _] of inputArray.entries()) {
    [inputArray, difference] = compareValues(index, inputArray);
    if (difference) allDifferences.push(difference);
  }
  // log(allDifferences);
  return sumDifferences(allDifferences);
};

log(arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]));

/**
 * 1. Compare two, current and next, if not increasing then increase next
 */
