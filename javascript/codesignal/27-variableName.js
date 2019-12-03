// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.
// Check if the given string is a correct variable name.
// Example
// For name = "var_1__Int", the output should be
// variableName(name) = true;
// For name = "qq-q", the output should be
// variableName(name) = false;
// For name = "2w2", the output should be
// variableName(name) = false.
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] string name
// Guaranteed constraints:
// 1 ≤ name.length ≤ 10.
// [output] boolean
// true if name is a correct variable name, false otherwise.
const variableName = (name) => {
  const VALID_CHARACTER = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
  return VALID_CHARACTER.test(name);
};

console.log(variableName('_hello234N0O@'));
