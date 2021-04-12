/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numb = n.toString();
  let max = Number(numb.substr(1));
  for (let i = 2; i <= numb.length; i++) {
    const curr = Number(numb.substr(0, i - 1) + numb.substr(i));
    if (max < curr) max = curr;
  }
  return max;
}

module.exports = deleteDigit;
