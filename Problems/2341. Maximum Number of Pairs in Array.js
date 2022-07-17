/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  const counts = nums.reduce((obj, num) => {
    obj[num] = (obj[num] || 0) + 1;
    return obj;
  }, {});
  let pairs = 0, remaining = 0;
  for (let key in counts) {
    pairs += ((counts[key] / 2) | 0);
    remaining += (counts[key] % 2);
  }
  return [pairs, remaining];
};