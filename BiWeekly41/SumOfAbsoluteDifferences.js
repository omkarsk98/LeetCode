// https://leetcode.com/contest/biweekly-contest-41/problems/sum-of-absolute-differences-in-a-sorted-array/
const { expect } = require("chai");
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getSumAbsoluteDifferences = function (nums) {
  let sum, sub = 0, n = nums.length;
  const res = [];
  sum = nums.reduce((sum, num) => sum + num, 0);
  for (let i = 0; i < n; i++) {
    sum -= nums[i];
    res[i] = sub + (i * nums[i]) - ((n - i - 1) * nums[i]) + sum;
    sub -= nums[i];
  }
  return res;
};

describe("5610. Sum of Absolute Differences in a Sorted Array", () => {
  let test = 1;
  it(`${test++}`, () => {
    const nums = [2, 3, 5];
    const res = getSumAbsoluteDifferences(nums);
    expect(res).to.be.eql([4, 3, 5]);
  });
  it(`${test++}`, () => {
    const nums = [1, 4, 6, 8, 10];
    const res = getSumAbsoluteDifferences(nums);
    expect(res).to.be.eql([24, 15, 13, 15, 21]);
  });

});