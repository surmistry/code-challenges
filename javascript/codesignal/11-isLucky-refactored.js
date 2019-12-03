const convertToStringArray = (n) => Array.from(String(n));

const splitString = (n) => {
  const half = n.length / 2;
  const firstHalf = [...n].splice(0, half).join('');
  const secondHalf = [...n].splice(half, half).join('');
  return ([firstHalf, secondHalf]);
};

const sumString = (n) => n.split('').reduce((prev, char) => prev + Number(char), 0);

const isLucky = (n) => {
  const [first, second] = splitString(convertToStringArray(n));
  return sumString(first) === sumString(second);
};

// console.log(isLucky(12330));
