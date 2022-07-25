/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let currMax = nums[0], maxProd = currMax, currMin = nums[0], tempMax;
  for (let i = 1; i < nums.length; i++) {
    tempMax = Math.max(nums[i], currMin * nums[i], currMax * nums[i]);
    currMin = Math.min(nums[i], currMin * nums[i], currMax * nums[i]);
    currMax = tempMax;
    maxProd = Math.max(currMax, maxProd);
  }
  return maxProd;
};