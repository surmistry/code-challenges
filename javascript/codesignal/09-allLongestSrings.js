// Given an array of strings, return another array containing all of its longest strings.
// Example
// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] array.string inputArray
// A non-empty array.
// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 10.
// [output] array.string
// Array of the longest strings, stored in the same order as in the inputArray.
// [JavaScript (ES6)] Syntax Tips
// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
// console.log("This prints to the console when you Run Tests");
// return "Hello, " + name;
// }


const findLongestStringLength = (allStrings) => {
  let max = -1;
  for (const target of allStrings) {
    if (target.length > max && target.length < 11) {
      max = target.length;
    }
  }
  return max;
};

const findLongestTargets = (maxLen, allStrings) => allStrings.filter((target) => target.length === maxLen);

const validateInputArray = (allStrings) => {
  const maxLength = 10;
  const minLength = 1;
  return ((allStrings.length >= minLength) && (allStrings.length <= maxLength));
};

const allLongestStrings = (inputArray) => {
  if (validateInputArray(inputArray)) {
    const maxLen = findLongestStringLength(inputArray);
    return findLongestTargets(maxLen, inputArray);
  }
};
