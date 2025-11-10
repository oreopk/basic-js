const { NotImplementedError } = require('../lib');

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
  if(!str || str.length ===0){
    return '';
  }
  let encoderLine = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if (count > 1) {
        encoderLine += count + str[i];
      } else {
        encoderLine += str[i];
      }
      count = 1;
    }
  }
  return encoderLine;
}

module.exports = {
  encodeLine
};
