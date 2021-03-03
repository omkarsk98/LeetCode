// https://leetcode.com/explore/featured/card/march-leetcoding-challenge-2021/588/week-1-march-1st-march-7th/3659/
const { expect } = require('chai');
/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  const total = (nums.length * (nums.length + 1)) / 2;
  return nums.reduce((total, num) => total - num, total);
};
const cases = {
  1: {
    nums: [3, 0, 1],
    res: 2
  },
  2: {
    nums: [0, 1],
    res: 2
  },
  3: {
    nums: [9, 6, 4, 2, 3, 5, 7, 0, 1],
    res: 8
  },
  4: {
    nums: [0],
    res: 1
  },
}

describe("Missing Number", () => {
  for (let testId = 1, len = Object.keys(cases).length; testId <= len; testId++) {
    const el = cases[testId];
    it(`${testId} [${el.nums}]`, () => {
      const res = missingNumber(el.nums);
      expect(res).to.be.equal(el.res);
    });
  }
})