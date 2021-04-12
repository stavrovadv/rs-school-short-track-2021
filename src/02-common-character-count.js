/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function charsRepeat(str) {
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str.charAt(i))) {
      map.set(str.charAt(i), map.get(str.charAt(i)) + 1);
    } else {
      map.set(str.charAt(i), 1);
    }
  }
  return map;
}

function getCommonCharacterCount(s1, s2) {
  let repeatedCount = 0;
  const map1 = charsRepeat(s1);
  const map2 = charsRepeat(s2);
  map1.forEach((value, key) => {
    if (map2.has(key)) {
      repeatedCount += Math.min(map1.get(key), map2.get(key));
    }
  });
  return repeatedCount;
}

module.exports = getCommonCharacterCount;
