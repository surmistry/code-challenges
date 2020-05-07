
const DEFAULT_ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const solution = (word, cipher, alphabet = DEFAULT_ALPHABET) => {
  // Type your solution here 
  if (cipher.length !== alphabet.length) return '';
  let alphabetIndexLut = [];
  for (let letter of word) {
    alphabetIndexLut.push(alphabet.indexOf(letter));
  }
  if (!alphabetIndexLut.every(index => index !== -1)) return ''
  const obfuscatedWord = alphabetIndexLut.reduce((word, index) => `${word}${cipher[index]}`, '');
  return obfuscatedWord;
};


