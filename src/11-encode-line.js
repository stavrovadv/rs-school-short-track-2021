/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let symbol = str.charAt(0);
  const res = [];
  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i) === symbol) {
      count++;
    } else {
      if (count > 1) {
        res.push(count + symbol);
      } else {
        res.push(symbol);
      }
      symbol = str.charAt(i);
      count = 1;
    }
  }
  if (count > 1) res.push(count + symbol);
  else res.push(symbol);
  return res.join('');
}

module.exports = encodeLine;
