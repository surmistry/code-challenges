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
const allLongestStrings = (inputArray) => (validateInputArray(inputArray)) ? findLongestTargets(findLongestStringLength(inputArray), inputArray) : [];
