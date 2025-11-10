const { NotImplementedError } = require('../lib');

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
  const dnsCount = {};

  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i].split('.').reverse();
    let currentDNS = '';

    for (const partDomain of domain) {
      currentDNS = currentDNS + '.' + partDomain;
        if (dnsCount[currentDNS] === undefined) {
          dnsCount[currentDNS] = 0;
        }
        dnsCount[currentDNS]++;

    }
  }

  return dnsCount;
}

module.exports = {
  getDNSStats
};
