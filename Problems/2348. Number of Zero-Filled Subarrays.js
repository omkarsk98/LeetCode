/**
 * @param {number[]} nums
 * @return {number}
 */
 var zeroFilledSubarray = function(nums) {
  let left, right, i = 0, len = nums.length, cnts = 0;
  while(i < len){
    if(nums[i] === 0){
      left = i;
      right = i + 1;
      while(nums[right] === 0) right++;
      // console.log("left and right stopped at:", left, right);
      const diff = right - left;
      cnts += (diff * (diff + 1)) / 2;
      i = right;
    }
    else
      i++;
  }
  return cnts;
};