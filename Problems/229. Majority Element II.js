/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const lim = (nums.length / 3 | 0) + 1;
  const result = [], counts = {};
  for (let num of nums) {
    if (counts[num] === lim) continue;
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] === lim) result.push(num);
  }
  return result;
};