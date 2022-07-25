/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currSum = maxSum = nums[0], len = nums.length;
  for (let i = 1; i < len; i++) {
    currSum = Math.max(currSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
};