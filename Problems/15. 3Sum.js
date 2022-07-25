/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0, len = nums.length, left, right; i < len; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    left = i + 1, right = len - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum == 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] == nums[left - 1]) left++;
      }
      else if (sum < 0) left++;
      else right--;
    }
  }
  return result;
};