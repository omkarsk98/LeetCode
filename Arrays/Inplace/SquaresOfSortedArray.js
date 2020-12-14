// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/
const { expect } = require("chai");
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  const len = nums.length;
  let r, l = 0;
  while (nums[l] < 0) l++;
  r = l--;
  for (let i = 0; i < len;)
    nums[i++] **= 2;

  const res = [];
  while (l >= 0 && r < len)
    res[r - l - 1] = nums[l] < nums[r] ? nums[l--] : nums[r++];
  while (l >= 0)
    res[r - l - 1] = nums[l--];
  while (r < len)
    res[r - l - 1] = nums[r++];
  return res;
};

describe("Squares of a Sorted Array", () => {
  let testId = 1;
  it(`${testId++}:`, () => {
    const res = sortedSquares([-4, -1, 0, 3, 10]);
    expect(res).to.be.eql([0, 1, 9, 16, 100]);
  });
  it(`${testId++}:`, () => {
    const res = sortedSquares([-7, -3, 2, 3, 11]);
    expect(res).to.be.eql([4, 9, 9, 49, 121]);
  });
})