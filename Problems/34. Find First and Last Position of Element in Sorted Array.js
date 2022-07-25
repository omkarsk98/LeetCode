/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const result = [-1, -1], len = nums.length;
  let left = 0, right = len - 1, mid;
  while (left <= right) {
    mid = left + (right - left) / 2 | 0;
    if (nums[mid] < target)
      left = mid + 1;
    else
      right = mid - 1;
  }
  if (nums[left] === target)
    result[0] = left;
  left = 0, right = len - 1;
  while (left <= right) {
    mid = left + (right - left) / 2 | 0;
    if (nums[mid] <= target)
      left = mid + 1;
    else
      right = mid - 1;
  }
  if (nums[left - 1] === target)
    result[1] = left - 1;
  else
    result[1] = result[0];
  return result;
};