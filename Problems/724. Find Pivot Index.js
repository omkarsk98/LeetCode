// https://leetcode.com/problems/find-pivot-index/
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let totalSum = nums.reduce((sum, el) => sum + el, 0), leftSum = 0, rightSum = totalSum, i = 0, len = nums.length;
  while (i < len) {
    rightSum -= nums[i];

    if (leftSum === rightSum) return i;

    leftSum += nums[i];
    i++;
  }
  return -1;
};