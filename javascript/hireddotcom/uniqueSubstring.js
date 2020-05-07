
const solution = (n) => {
  // Type your solution here 
  let subStrings = [];
  const characters = String(n).split('')
  if (characters.length === 1) return characters.length;
  for (let index = 0; index < (characters.length - 1); index++) {
    let character = characters[index]
    let charCopy = characters.slice(index + 1);
    const uniqueStrings = findUniqueSubstring(charCopy, character);
    console.log('hello')
    console.log({ uniqueStrings })
    subStrings.push(uniqueStrings);
  }
  const maxUnique = findMaxString(subStrings);
  return (maxUnique.length)
};

const findUniqueSubstring = (characters, target) => {
  let substring = [target];
  for (let character of characters) {
    if (substring.indexOf(character) === -1) {
      substring.push(character)
    }
    else break;
  }
  return substring;
}

const findMaxString = (uniqueStrings) => uniqueStrings.reduce(
  (prevUnique, currUnique) => prevUnique.length > currUnique.length ? prevUnique : currUnique,
  [],
)

console.log(solution('1'));