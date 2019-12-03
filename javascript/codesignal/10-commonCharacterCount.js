// Given two strings, find the number of common characters between them.
// Example
// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.
// Strings have 3 common characters - 2 "a"s and 1 "c".
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] string s1
// A string consisting of lowercase English letters.
// Guaranteed constraints:
// 1 ≤ s1.length < 15.
// [input] string s2
// A string consisting of lowercase English letters.
// Guaranteed constraints:
// 1 ≤ s2.length < 15.
// [output] integer

/** @todo: Not checking both strings atm, required checking both at once */
const findAllCharacter = (target, stringInput) => {
  let sum = 0;
  for (const character of stringInput) {
    console.log(character);
    if (character === target) sum += 1;
  }
  return sum;
};


const countCommonStrings = (intersection, string1, string2) => {
  const commonStrings = [];
  for (const element of intersection) {
    console.log('find common elements');
    const string1Sum = findAllCharacter(element, string1);
    const string2Sum = findAllCharacter(element, string2);
    const lesserCommon = (string1Sum < string2Sum) ? string1Sum : string2Sum;
    console.log(string1Sum, string2Sum, element, lesserCommon);
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
  const Set2 = new Set(s2);
  const instersection = new Set();
  for (const element of Set2) {
    if (Set1.has(element)) {
      instersection.add(element);
    }
  }
  const commonCounts = countCommonStrings(instersection, s1, s2);
  return sumCounts(commonCounts);
};

commonCharacterCount('aabcc', 'adcaa');
