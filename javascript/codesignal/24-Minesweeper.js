// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.
// Example
// For
// matrix = [[true, false, false],
// [false, true, false],
// [false, false, false]]
// the output should be
// minesweeper(matrix) = [[1, 2, 1],
// [2, 1, 1],
// [1, 1, 1]]
// Check out the image below for better understanding:
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] array.array.boolean matrix
// A non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.
// Guaranteed constraints:
// 2 ≤ matrix.length ≤ 100,
// 2 ≤ matrix[0].length ≤ 100.
// [output] array.array.integer
// Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.

const findMinMax = (index, length) => {
  const max = (index === length - 1) ? index : index + 1;
  const min = (index === 0) ? index : index - 1;
  return ({ max, min });
};

const countMines = (row, column, matrix) => {
  let mineCount = 0;
  const { min: rowMin, max: rowMax } = findMinMax(row, matrix.length);
  const { min: columnMin, max: columnMax } = findMinMax(column, matrix[0].length);
  for (let startRow = rowMin; startRow <= rowMax; startRow++) {
    for (let startCol = columnMin; startCol <= columnMax; startCol++) {
      if (!((startRow === row) && (startCol === column)) && (matrix[startRow][startCol])) mineCount += 1;
    }
  }
  return mineCount;
};

const minesweeper = (matrix) => {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const mines = [];
  for (let row = 0; row < rows; row++) {
    const rowMines = [];
    for (let column = 0; column < columns; column++) {
      rowMines.push(countMines(row, column, matrix));
    }
    mines.push(rowMines);
  }
  return mines;
};

console.log(minesweeper([[true, false, false],
  [false, true, false],
  [false, false, false]]));
