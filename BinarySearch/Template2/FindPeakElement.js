/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0, right = nums.length - 1, mid;
  while(left <= right){
    mid = Math.floor((left + right) / 2);
    if(nums[mid] < nums[mid + 1])
      left = mid + 1;
    else
      right = mid - 1;
  }
  return left;
};