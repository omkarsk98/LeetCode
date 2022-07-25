/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const result = new Array(n * 2);
  let i = 0, j = n, k = 0;
  while (i < n) {
    result[k++] = nums[i];
    result[k++] = nums[j];
    i++;
    j++;
  }
  nums = result;
  return nums;
};