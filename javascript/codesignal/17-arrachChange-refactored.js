/** @todo: Refactor to not exceed time limit constraint */
const findIncreasingDifference = (first, next) => ((first + 1) - next);

const compareValues = (index, values) => {
  const copiedValues = values;
  let tempDifference = 0;
  if (index < values.length - 1) {
    const current = copiedValues[index];
    const next = copiedValues[index + 1];
    if (next <= current) {
      tempDifference = findIncreasingDifference(current, next);

      values.splice(index + 1, 1, next + tempDifference);
    }
  }
  return [values, tempDifference];
};

const sumDifferences = (allDifferences) => {
  let sum = 0;
  for (const value of allDifferences) {
    sum += Number(value);
  }
  return sum;
};

const arrayChange = (inputArray) => {
  let inputCopy = inputArray;
  let difference = 0;
  const allDifferences = [];
  for (const [index, _] of inputCopy.entries()) {
    [inputCopy, difference] = compareValues(index, inputCopy);
    if (difference) allDifferences.push(difference);
  }
  return sumDifferences(allDifferences);
};
