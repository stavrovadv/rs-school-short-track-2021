/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function takeValueOrZero(matrix, i, j) {
  if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length) {
    return 0;
  }
  return matrix[i][j] ? 1 : 0;
}

function countNeighbors(matrix, i, j) {
  let res = 0;
  res += takeValueOrZero(matrix, i - 1, j);
  res += takeValueOrZero(matrix, i - 1, j - 1);
  res += takeValueOrZero(matrix, i - 1, j + 1);
  res += takeValueOrZero(matrix, i, j - 1);
  res += takeValueOrZero(matrix, i, j + 1);
  res += takeValueOrZero(matrix, i + 1, j - 1);
  res += takeValueOrZero(matrix, i + 1, j);
  res += takeValueOrZero(matrix, i + 1, j + 1);
  return res;
}

function minesweeper(matrix) {
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    res.push([]);
    for (let j = 0; j < matrix[0].length; j++) {
      res[i].push(countNeighbors(matrix, i, j));
    }
  }
  return res;
}

module.exports = minesweeper;
