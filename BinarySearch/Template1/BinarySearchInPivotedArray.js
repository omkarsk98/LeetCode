const { expect } = require('chai');
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target, left = 0, right = nums.length) {
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] == target)
      return mid;
    if (nums[left] <= nums[mid]) {
      // ascending order from left to mid
      if (target >= nums[left] && target <= nums[mid])
        // target is between left and mid
        right = mid - 1;
      else
        left = mid + 1;
    }
    else if (target >= nums[mid] && target <= nums[right])
      // target is between mid and right
      left = mid + 1;
    else
      right = mid - 1;
  }
  return -1;
};

const cases = [{
  nums: [4, 5, 6, 7, 0, 1, 2],
  target: 0,
  res: 4
}, {
  nums: [4, 5, 6, 7, 0, 1, 2],
  target: 3,
  res: -1
}, {
  nums: [1],
  target: 0,
  res: -1
}, {
  nums: [5, 1, 3],
  target: 3,
  res: 2
}]

describe("Search in rotated sorted array", () => {
  for (let testId = 0, len = Object.keys(cases).length; testId < len; testId++) {
    const el = cases[testId];
    it(`${testId + 1} [${el.nums}], target=${el.target} and result=${el.res}`, () => {
      const res = search(el.nums, el.target);
      expect(res).to.be.equal(el.res);
    });
  }
})