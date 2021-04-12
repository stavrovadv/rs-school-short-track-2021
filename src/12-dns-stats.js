/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  const map = new Map();
  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i];
    const arr = domain.split('.');
    arr.reverse();
    for (let j = 0, curr = ''; j < arr.length; j++) {
      curr += (`.${arr[j]}`);
      if (map.has(curr)) {
        map.set(curr, map.get(curr) + 1);
      } else {
        map.set(curr, 1);
      }
    }
  }
  map.forEach((val, key) => {
    obj[key] = val;
  });
  return obj;
}

module.exports = getDNSStats;
