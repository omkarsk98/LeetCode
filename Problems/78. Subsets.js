// https://leetcode.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [], numsLen = nums.length;;

  const getSubSets = (startFrom = 0, currList = [], len = 0) => {
    if (len === currList.length) {
      result.push([...currList]);
      return;
    }
    for (let i = startFrom; i < numsLen; i++) {
      currList.push(nums[i]);
      getSubSets(i + 1, currList, len);
      currList.pop();
    }
  }

  for (let i = 0; i <= numsLen; i++)
    getSubSets(0, [], i);
  return result;
};