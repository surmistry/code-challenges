const findNumOfTargets = (target, stringInput) => Array.from(stringInput).filter((character) => character === target).length;


const countCommonStrings = (intersection, string1, string2) => {
  const commonStrings = [];
  for (const element of intersection) {
    // console.log('find common elements');
    const string1Sum = findNumOfTargets(element, string1);
    const string2Sum = findNumOfTargets(element, string2);
    const lesserCommon = (string1Sum < string2Sum) ? string1Sum : string2Sum;
    // console.log(string1Sum, string2Sum, element, lesserCommon);
    commonStrings.push(lesserCommon);
  }
  return commonStrings;
};

const sumCounts = (countArray) => {
  let sum = 0;
  for (const count of countArray) {
    sum += count;
  }
  return sum;
};

const commonCharacterCount = (s1, s2) => {
  const Set1 = new Set(s1);
  const instersection = new Set();
  for (const element of new Set(s2)) {
    if (Set1.has(element)) {
      instersection.add(element);
    }
  }
  return sumCounts(countCommonStrings(instersection, s1, s2));
};

// console.log(commonCharacterCount('aabcc', 'adcaa'));
