// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
// Given two arrays a and b, check whether they are similar.
// Example
// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.
// The arrays are equal, no need to swap any elements.
// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// areSimilar(a, b) = true.
// We can obtain b from a by swapping 2 and 1 in b.
// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// areSimilar(a, b) = false.
// Any swap of any two elements either in a or in b won't make a and b equal.
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] array.integer a
// Array of integers.
// Guaranteed constraints:
// 3 ≤ a.length ≤ 105,
// 1 ≤ a[i] ≤ 1000.
// [input] array.integer b
// Array of integers of the same length as a.
// Guaranteed constraints:
// b.length = a.length,
// 1 ≤ b[i] ≤ 1000.
// [output] boolean
// true if a and b are similar, false otherwise.

const log = (...message) => console.log(...message);

const findDifferentElements = (a, b) => {
  const differenceA = [];
  const differenceB = [];
  for (const [index, value] of a.entries()) {
    if (value !== b[index]) {
      differenceA.push(value);
      differenceB.push(b[index]);
    }
  }
  return ([differenceA, differenceB]);
};

const constructComparator = (numbers) => {
  const comparator = {};
  for (const value of numbers) {
    if (!comparator[value]) comparator[value] = 1;
    else comparator[value] += 1;
  }
  return comparator;
};

const compareComparators = (a, b) => {
  let compare = true;
  for (const value in a) {
    compare = compare && (a[value] === b[value]);
  }
  return compare;
};

const compareElements = (a, b) => {
  const [differencesA, _] = findDifferentElements(a, b);
  return (differencesA.length <= 2);
};


const compareSets = (a, b) => {
  const [setA, setB] = [constructComparator(a), constructComparator(b)];
  return compareComparators(setA, setB);
};

const areSimilar = (a, b) => (compareSets(a, b) && compareElements(a, b));

// log(areSimilar([832, 998, 148, 570, 533, 561, 894, 147, 455, 279], [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]));
