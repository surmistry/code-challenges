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
  for (const value of numbers) comparator[value] = (!comparator[value]) ? 1 : comparator[value] + 1;
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
