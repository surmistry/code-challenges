const isPrime = num => {
  for (let incrementor = 2; incrementor < num; incrementor++)
    if (num % incrementor === 0) return false;
  return num > 1;
}

const solution = (n) => {
  // Type your solution here 
  let fibbSequence = []
  for (let increment = 2; increment <= n; increment++) {
    fibbSequence.push(findFibb(increment))
  }
  return (fibbSequence.filter(isPrime));
};


const findFibb = (n) => {
  if (n === 0) return;
  if (n === 1) return 1;
  if (n === 2) return 1;
  return findFibb(n - 1) + findFibb(n - 2);
}
// solution(6)
// [2, 3, 5]