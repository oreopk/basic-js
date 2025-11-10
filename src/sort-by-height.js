const { NotImplementedError } = require('../lib');

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
  let arrFilter=[];
  for(let i = 0; i < arr.length; i++){
    if(arr[i]>=0){
      arrFilter.push(arr[i]);
    }
  }

  const sortedArr = arrFilter.sort((a, b) => a - b);
  const result = [];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(-1);
    }else{
      result.push(sortedArr[index]);
      index++;
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
