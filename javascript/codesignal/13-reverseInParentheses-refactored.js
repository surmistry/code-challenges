/** @todo: Split string into original string, and targets to be reversed */
const parseBrackets = (input) => {
  const separate = input.split('');
  const half = Math.floor(separate.length / 2);
  for (let index = 0; index < half; index++) {
    const endIndex = separate.length - (1 + index);
    const tempEndVal = separate[endIndex];
    separate[endIndex] = separate[index];
    separate[index] = tempEndVal;
  }
  return separate.join('');
};
const findOpenString = /\(([^()]*)\)/g;

const reverseInParentheses = (inputString) => {
  if (!findOpenString.test(inputString)) return inputString;
  const reversedBase = inputString.replace(findOpenString, (_, matchTarget,) => parseBrackets(matchTarget));
  // console.log(reversedBase);
  return reverseInParentheses(reversedBase);
};

console.log(reverseInParentheses('foo(bar(baz)d)blim'));

// foo(bar(baz)d)blim
// foo(barzabd)blim
// foodbazrabblim
