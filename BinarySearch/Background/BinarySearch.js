const { expect } = require('chai');
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target, left = 0, right = nums.length) {
  while(left <= right){
    const mid = Math.floor((right + left) / 2);
    if(nums[mid] == target)
      return mid;
    else if(nums[mid] < target)
      left = mid + 1;
    else
      right = mid - 1;
  }
  return -1;
};

const cases = {
  1: {
    nums: [-1, 0, 3, 5, 9, 12],
    target: 9,
    res: 4
  },
  2: {
    nums: [-1, 0, 3, 5, 9, 12],
    target: 2,
    res: -1
  },
  3: {
    nums: [5],
    target: 5,
    res: 0
  },
}

describe("Binary Search", () => {
  for (let testId = 1, len = Object.keys(cases).length; testId <= len; testId++) {
    const el = cases[testId];
    it(`${testId} [${el.nums}]`, () => {
      const res = search(el.nums, el.target);
      expect(res).to.be.equal(el.res);
    });
  }
})