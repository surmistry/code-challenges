// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
// Example
// For
// picture = ["abc",
// "ded"]
// the output should be
// addBorder(picture) = ["*****",
// "*abc*",
// "*ded*",
// "*****"]
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] array.string picture
// A non-empty array of non-empty equal-length strings.
// Guaranteed constraints:
// 1 ≤ picture.length ≤ 100,
// 1 ≤ picture[i].length ≤ 100.
// [output] array.string
// The same matrix of characters, framed with a border of asterisks of width 1.

const BORDER_CHARACTER = '*';
const BORDER_WIDTH = 1;

const multiplyString = (target, number) => {
  let multiple = target;
  for (let i = 1; i < number; i++) {
    multiple += target;
  }
  return multiple;
};

const addBorder = (picture) => {
  const borderArray = [];
  const borderLength = picture[0].length + BORDER_WIDTH * 2;
  const topAndBottom = multiplyString(BORDER_CHARACTER, borderLength);
  borderArray.push(topAndBottom);
  const sideBorder = multiplyString(BORDER_CHARACTER, BORDER_WIDTH);
  for (let borderIndex = 0; borderIndex < picture.length; borderIndex++) {
    borderArray.push(`${sideBorder}${picture[borderIndex]}${sideBorder}`);
  }
  borderArray.push(topAndBottom);
  console.log(borderArray);
};

addBorder(['abc',
  'ded']);
