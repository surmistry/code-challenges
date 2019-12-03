// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.
// Example
// For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
// arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] array.integer inputArray
// Guaranteed constraints:
// 0 ≤ inputArray.length ≤ 104,
// 0 ≤ inputArray[i] ≤ 109.
// [input] integer elemToReplace
// Guaranteed constraints:
// 0 ≤ elemToReplace ≤ 109.
// [input] integer substitutionElem
// Guaranteed constraints:
// 0 ≤ substitutionElem ≤ 109.
// [output] array.integer
// const arrayReplace = (inputArray, elemToReplace, substitutionElem) => {
//   inputArray.splice(inputArray.indexOf(elemToReplace), 1, substitutionElem);
//   while (inputArray.indexOf(elemToReplace) !== -1) {
//     inputArray.splice(inputArray.indexOf(elemToReplace), 1, substitutionElem);
//   }

//   return (inputArray);
// };

const arrayReplace = (inputArray, elemToReplace, substitutionElem) => {
  const substituteArray = [];
  for (const value of inputArray) {
    const newValue = (value === elemToReplace) ? substitutionElem : value;
    substituteArray.push(newValue);
  }
  return substituteArray;
};


arrayReplace([1, 2, 1], 1, 3);
