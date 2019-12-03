// Given a string, replace each of its character by the next one in the English alphabet (z would be replaced by a).
// Example
// For inputString = "crazy", the output should be
// alphabeticShift(inputString) = "dsbaz".
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] string inputString
// Non-empty string consisting of lowercase English characters.
// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 1000.
// [output] string
// The result string after replacing all of its characters.

const alphabeticShift = (inputString, shift = 1) => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const shiftedMessage = [];
  for (const character of inputString) {
    const messageIndex = (alphabet.indexOf(character) + shift) % alphabet.length;
    shiftedMessage.push(alphabet[messageIndex]);
  }
  return shiftedMessage.join('');
};


console.log(alphabeticShift('hellowworld'));
