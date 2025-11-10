const { NotImplementedError } = require('../lib');

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
function deleteDigit (n) {
  const str = n.toString();
  let maxNumber = 0;

  for (let i = 0; i < str.length; i++) {
      const newNum = str.substring(0, i) + str.substring(i + 1);
      const currentNumber = Number(newNum);
      if (currentNumber > maxNumber) {
        maxNumber = currentNumber;
      }
  }

  return maxNumber;

}

module.exports = {
  deleteDigit
};
