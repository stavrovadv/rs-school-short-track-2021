/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const excludedIndexes = [];
  const included = [];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      excludedIndexes.push(i);
    } else {
      included.push(arr[i]);
    }
  }

  included.sort((a, b) => a - b);

  for (let i = 0, j = 0; i < arr.length; i++) {
    if (excludedIndexes.includes(i)) {
      result.push(-1);
    } else {
      result.push(included[j]);
      j++;
    }
  }
  return result;
}

module.exports = sortByHeight;
