// https://leetcode.com/explore/featured/card/fun-with-arrays/523/conclusion/3270/
const { expect } = require("chai");
/**
 * @param {number[]} heights
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
  let temp;
  for (let i = 0, len = nums.length; i < len; i++) {
    temp = Math.abs(nums[i]) - 1 ;
    if (nums[temp] > 0)
      nums[temp] *= -1;
  }
  const res = [];
  for (let i = 0, len = nums.length; i < len; i++)
    nums[i] > 0 && res.push(i + 1)
  return res;
};

describe("Find All Numbers Disappeared in an Array", () => {
  let testId = 1;
  it(`${testId++}`, () => {
    const arr = [4, 3, 2, 7, 8, 2, 3, 1];
    const res = findDisappearedNumbers(arr);
    expect(res).to.be.eql([5, 6]);
  });
})