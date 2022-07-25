// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0, j = 1, len = nums.length;
  while (j < len) {
    if (nums[i] === nums[j]) {
      while (nums[j] === nums[i]) j++;
      if (j === len) break;
      nums[i + 1] = nums[j];
    }
    i++;
  }
  nums.length = i + 1;
};