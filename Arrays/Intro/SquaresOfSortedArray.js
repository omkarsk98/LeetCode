// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
  return nums
      .map(num => num**2)
      .sort((a,b)=> a-b);
};