// https://leetcode.com/explore/featured/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/
const { expect } = require("chai");
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function (arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    // console.log("Obj:", obj, arr[i], arr[i] / 2, arr[i] * 2);
    if (obj[arr[i] * 2] || obj[arr[i] / 2])
      return true;
    obj[arr[i]] = 1;
  }
  return false;
};

describe("Check If N and Its Double Exist", () => {
  let test = 1;
  it(`${test++}`, () => {
    const arr = [10, 2, 5, 3];
    const res = checkIfExist(arr);
    expect(res).to.be.equal(true);
  });
  it(`${test++}`, () => {
    const arr = [7, 1, 14, 11];
    const res = checkIfExist(arr);
    expect(res).to.be.equal(true);
  });
  it(`${test++}`, () => {
    const arr = [3, 1, 7, 11];
    const res = checkIfExist(arr);
    expect(res).to.be.equal(false);
  });
  it(`${test++}`, () => {
    const arr = [0, 0];
    const res = checkIfExist(arr);
    expect(res).to.be.equal(true);
  });
  it(`${test++}`, () => {
    const arr = [-2, 0, 10, -19, 4, 6, -8];
    const res = checkIfExist(arr);
    expect(res).to.be.equal(false);
  });
})