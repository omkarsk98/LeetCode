// https://leetcode.com/explore/featured/card/december-leetcoding-challenge/570/week-2-december-8th-december-14th/3562/
const { expect } = require('chai');
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let i = 0, j = i + 1, cnt = 1;
  while (j < nums.length) {
    if (nums[i] == nums[j]) {
      if (i == 0) {
        i++;
        j++;
      }
      else if (nums[i] == nums[i - 1])
        j++;
      else 
        nums[++i] = nums[j++];
    }
    else 
      nums[++i] = nums[j++]
  }
  nums.length = ++i;
  return i;
};

describe("Remove values with more than 2 duplicates", () => {
  let test = 1
  it(`${test++} [1, 1, 1, 2, 2, 3]`, () => {
    nums = [1, 1, 1, 2, 2, 3];
    const res = removeDuplicates(nums);
    // console.log("Got nums as:", nums);
    expect(res).to.be.equal(5);
    expect(nums).to.be.eql([1, 1, 2, 2, 3]);
  });
  it(`${test++} [0, 0, 1, 1, 1, 1, 2, 3, 3]`, () => {
    nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    const res = removeDuplicates(nums);
    expect(res).to.be.equal(7);
    expect(nums).to.be.eql([0, 0, 1, 1, 2, 3, 3]);
  });
  it(`${test++} [1, 1, 2, 3, 4, 4, 4]`, () => {
    nums = [1, 1, 2, 3, 4, 4, 4];
    const res = removeDuplicates(nums);
    expect(res).to.be.equal(6);
    expect(nums).to.be.eql([1, 1, 2, 3, 4, 4]);
  });
});