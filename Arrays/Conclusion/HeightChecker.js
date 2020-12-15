// 
const { expect } = require("chai");
/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function (heights) {
  const res = [...heights]
    .sort((a, b) => a - b);
  let cnt = 0;
  for (let i = 0, len = heights.length; i < len; i++)
    if (heights[i] != res[i])
      cnt++;
  return cnt;
};

describe("Height Checker", () => {
  let testId = 1;
  it(`${testId++}`, () => {
    const arr = [1, 1, 4, 2, 1, 3];
    const res = heightChecker(arr);
    expect(res).to.be.equal(3);
  });
  it(`${testId++}`, () => {
    const arr = [5, 1, 2, 3, 4];
    const res = heightChecker(arr);
    expect(res).to.be.equal(5);
  });
  it(`${testId++}`, () => {
    const arr = [1, 2, 3, 4, 5];
    const res = heightChecker(arr);
    expect(res).to.be.equal(0);
  });
})