const { NotImplementedError } = require('../extensions/index.js');

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
  const strNum = n.toString();
  let maxNumber = -Infinity;

  for (let i = 0; i < strNum.length; i++) {
    const newNum = strNum.slice(0, i) + strNum.slice(i + 1);
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
