const BORDER_CHARACTER = '*';
const BORDER_WIDTH = 1;

const multiplyString = (target, number) => {
  let multiple = target;
  for (let i = 1; i < number; i++) {
    multiple += target;
  }
  return multiple;
};

const addBorder = (picture) => {
  const borderArray = [];
  const borderLength = picture[0].length + BORDER_WIDTH * 2;
  const topAndBottom = multiplyString(BORDER_CHARACTER, borderLength);
  borderArray.push(topAndBottom);
  const sideBorder = multiplyString(BORDER_CHARACTER, BORDER_WIDTH);
  for (let borderIndex = 0; borderIndex < picture.length; borderIndex++) {
    borderArray.push(`${sideBorder}${picture[borderIndex]}${sideBorder}`);
  }
  borderArray.push(topAndBottom);
  return (borderArray);
};

addBorder(['abc',
  'ded']);
