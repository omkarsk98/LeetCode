// https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3248/
const {expect} = require('chai');
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let i=0, j = i+1;
  for(;j<nums.length;){
    while(nums[i]==nums[j]){
      j++;
    }
    if(j>=nums.length)
      break;
    nums[++i] = nums[j++];
  }
  nums.length = ++i;
  return i;
};

describe("Remove duplicates", ()=>{
  let test = 1
  it(`${test++}`, () => {
    nums = [1,1,2];
    const res = removeDuplicates(nums);
    expect(res).to.be.equal(2);
    expect(nums).to.be.eql([1,2]);
  });
  it(`${test++}`, () => {
    nums = [0,0,1,1,1,2,2,3,3,4];
    const res = removeDuplicates(nums);
    expect(res).to.be.equal(5);
    expect(nums).to.be.eql([0,1,2,3,4]);
  });
  it(`${test++}`, () => {
    nums = [1,1,2,3,4,4,4];
    const res = removeDuplicates(nums);
    expect(res).to.be.equal(4);
    expect(nums).to.be.eql([1,2,3,4]);
  });
});