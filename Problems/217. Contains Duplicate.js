/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  const cnts = {};
  for(let num of nums){
    cnts[num] = (cnts[num] || 0) + 1;
    if(cnts[num] > 1) return true;
  }
  return false;
};