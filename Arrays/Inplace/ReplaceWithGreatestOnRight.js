// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3259/
const { expect } = require("chai");

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function (arr) {
  let len = arr.length, max = arr[len - 1];
  arr[len - 1] = -1;
  for (let i = len - 2; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = max;
    if(temp > max)
      max = temp;
  }
  return arr;
};

describe("Replace Elements with Greatest Element on Right Side", () => {
  let testId = 1;
  it(`${testId} [17, 18, 5, 4, 6, 1]`, () => {
    const arr = [17, 18, 5, 4, 6, 1];
    res = replaceElements(arr);
    expect(res).to.be.eql([18, 6, 6, 6, 1, -1]);
  });
  // it(`${testId} [17, 18, 5, 4, 6, 1]`, () => {
  //   const arr = [17, 18, 5, 4, 6, 1];
  //   replaceElements(arr);
  //   expect(arr).to.be.eql([18, 6, 6, 6, 1, -1]);
  // });
});