// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  return nums
    .reduce((cnt, num) => {
      return `${num}`.length % 2 == 0 ? ++cnt : cnt;
    }, 0)
};