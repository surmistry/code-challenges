// Given two cells on the standard chess board, determine whether they have the same color or not.
// Example
// For cell1 = "A1" and cell2 = "C3", the output should be
// chessBoardCellColor(cell1, cell2) = true.
// For cell1 = "A1" and cell2 = "H3", the output should be
// chessBoardCellColor(cell1, cell2) = false.
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] string cell1
// Guaranteed constraints:
// cell1.length = 2,
// 'A' ≤ cell1[0] ≤ 'H',
// 1 ≤ cell1[1] ≤ 8.
// [input] string cell2
// Guaranteed constraints:
// cell2.length = 2,
// 'A' ≤ cell2[0] ≤ 'H',
// 1 ≤ cell2[1] ≤ 8.
// [output] boolean
// true if both cells have the same color, false otherwise.

const CHESS_BOARD = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
];


const findColumnRow = (cell) => {
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const rowIndex = Number(cell[1]) - 1;
  const columnIndex = columns.indexOf(cell[0]);
  return ({ row: rowIndex, column: columnIndex });
};

const chessBoardCellColor = (cell1, cell2) => {
  const c1 = findColumnRow(cell1);
  const c2 = findColumnRow(cell2);

  return CHESS_BOARD[c1.row][c1.column] === CHESS_BOARD[c2.row][c2.column];
};

console.log(chessBoardCellColor('A1', 'C3'))
;