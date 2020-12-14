// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3157/
const { expect } = require("chai");

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let cnt = 0, len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i])
      nums[cnt++] = nums[i];
  }
  while (cnt < len)
    nums[cnt++] = 0;
};

describe("Move Zeroes", () => {
  let testId = 1;
  it(`${testId++}. [0,1,0,3,12]`, () => {
    const arr = [0, 1, 0, 3, 12];
    moveZeroes(arr);
    expect(arr).to.be.eql([1, 3, 12, 0, 0]);
  });
  it(`${testId++}. [1]`, () => {
    const arr = [1];
    moveZeroes(arr);
    expect(arr).to.be.eql([1]);
  });
  it(`${testId++}. [0,0]`, () => {
    const arr = [0, 0];
    moveZeroes(arr);
    expect(arr).to.be.eql([0, 0]);
  });
  it(`${testId++}. [0,1]`, () => {
    const arr = [0, 1];
    moveZeroes(arr);
    expect(arr).to.be.eql([1, 0]);
  });
  it(`${testId++}. [1,0]`, () => {
    const arr = [1, 0];
    moveZeroes(arr);
    expect(arr).to.be.eql([1, 0]);
  });
});