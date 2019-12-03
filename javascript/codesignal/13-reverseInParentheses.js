// Write a function that reverses characters in (possibly nested) parentheses in the input string.
// Input strings will always be well-formed with matching ()s.
// Example
// For inputString = "(bar)", the output should be
// reverseInParentheses(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// reverseInParentheses(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] string inputString
// A string consisting of lowercase English letters and the characters ( and ). It is guaranteed that all parentheses in inputString form a regular bracket sequence.
// Guaranteed constraints:
// 0 ≤ inputString.length ≤ 50.
// [output] string
// Return inputString, with all the characters that were in parentheses reversed.
// [JavaScript (ES6)] Syntax Tips
// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
// console.log("This prints to the console when you Run Tests");
// return "Hello, " + name;
// }

// var matches = [];
// var match = regex.exec(txt);
// while (match != null) {
// matches.push(match[1]);
// match = regex.exec(txt);
// }

/** @todo: Split string into original string, and targets to be reversed */
const parseBrackets = (input) => {
  const separate = input.split('');
  const half = Math.floor(separate.length / 2);
  for (let index = 0; index < half; index++) {
    const endIndex = separate.length - (1 + index);
    const tempEndVal = separate[endIndex];
    separate[endIndex] = separate[index];
    separate[index] = tempEndVal;
    // console.log('index ', separate[index], index, lastVal);
    return separate.join('');
  }
};
const findOpenString = /\(([^()]*)\)/g;

const reverseInParentheses = (inputString) => {
  if (!findOpenString.test(inputString)) return inputString;
  const reversedBase = inputString.replace(findOpenString, (_, matchTarget,) => parseBrackets(matchTarget));
  return reverseInParentheses(reversedBase);
};

console.log(reverseInParentheses('foo(bar(baz)d)blim'));
