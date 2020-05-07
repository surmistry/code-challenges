
const solution = (prices) => {
  // Type your solution here
  const profits = findDifference(prices);
  const maxProfit = findMax(profits);
  return maxProfit
};

const findDifference = (prices) => {
  let profits = [];
  for (let index = 0; index < (prices.length - 1); index++) {
    let priceCopy = [...prices];
    let buyPrice = prices[index]
    let maxSell = findMax(priceCopy.slice(index + 1));
    profits.push(maxSell - buyPrice)
  }
  return (profits)
}

const findMax = (prices) => {
  let max = prices[0];
  for (let price of prices) {
    if (price > max) max = price
  }
  return max;
}

console.log(solution([13, 10, 8, 4, 10]))

