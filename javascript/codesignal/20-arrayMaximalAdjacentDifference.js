// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
// Example
// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] array.integer inputArray
// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 10,
// -15 ≤ inputArray[i] ≤ 15.
// [output] integer
// The maximal absolute difference.

const calculateDifference = (prev, current, next) => {
  const prevDiff = Math.abs(current - prev);
  const nextDiff = Math.abs(current - next);
  return (prevDiff > nextDiff) ? prevDiff : nextDiff;
};

const arrayMaximalAdjacentDifference = (inputArray) => {
  let maxDiff = 0;
  for (const [index, value] of inputArray.entries()) {
    if ((index > 0) && (index < inputArray.length - 1)) {
      const currentDiff = calculateDifference(inputArray[index - 1], value, inputArray[index + 1]);
      if (currentDiff > maxDiff) maxDiff = currentDiff;
    }
  }
  return maxDiff;
};

arrayMaximalAdjacentDifference([2, 4, 1, 0]);
