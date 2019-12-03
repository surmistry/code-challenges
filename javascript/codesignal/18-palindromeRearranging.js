// Given a string, find out if its characters can be rearranged to form a palindrome.
// Example
// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.
// We can rearrange "aabb" to make "abba", which is a palindrome.
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] string inputString
// A string consisting of lowercase English letters.
// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.
// [output] boolean
// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

/**
 * Requirements of a palindrome include
 * 1. Even number of characters, sets
 * 2. Only one odd number (aka the centre character)
 * 3. Any multiple of 2 for all other characters
 *
 */

const log = (...messages) => console.log(...messages);

const countSetValues = (inputCharacters, collection) => {
  const tempCollect = { ...collection };
  for (const character of inputCharacters) {
    if (!tempCollect[character]) tempCollect[character] = 1;
    else tempCollect[character] += 1;
  }
  return tempCollect;
};

const findCharacterCount = (input) => {
  const inputCharacters = input.split('');
  return countSetValues(inputCharacters, {});
};

const palindromeRearranging = (inputString) => {
  const isEven = (inputString.length % 2 === 0);
  const countedCharacters = findCharacterCount(inputString);
  const unevenCharacters = Object.values(countedCharacters).filter((character) => character % 2);
  return (unevenCharacters.length <= 1);
};

log(palindromeRearranging('acabb'));
