// https://leetcode.com/explore/featured/card/fun-with-arrays/523/conclusion/3231/ 
const { expect } = require("chai");
/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
  let first = nums[0], second = Number.NEGATIVE_INFINITY, third = Number.NEGATIVE_INFINITY;
  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i] > first) {
      third = second;
      second = first;
      first = nums[i];
    }
    else if (nums[i] > second && nums[i] != first && nums[i] < first) {
      third = second;
      second = nums[i];
    }
    else if (nums[i] > third && nums[i] != second && nums[i] < first)
      third = nums[i];
    // console.log("Data::", first, second, third);
  }
  return third != '-Infinity' ? third : first;
};

describe("Height Checker", () => {
  let testId = 1;
  it(`${testId++}`, () => {
    const arr = [3, 2, 1];
    const res = thirdMax(arr);
    expect(res).to.be.equal(1);
  });
  it(`${testId++}`, () => {
    const arr = [1, 2];
    const res = thirdMax(arr);
    expect(res).to.be.equal(2);
  });
  it(`${testId++}`, () => {
    const arr = [2, 2, 3, 1];
    const res = thirdMax(arr);
    expect(res).to.be.equal(1);
  });
  it(`${testId++}`, () => {
    const arr = [5, 2, 2];
    const res = thirdMax(arr);
    expect(res).to.be.equal(5);
  });
  it(`${testId++}`, () => {
    const arr = [1, 2, 2, 5, 3, 5];
    const res = thirdMax(arr);
    expect(res).to.be.equal(2);
  });
})