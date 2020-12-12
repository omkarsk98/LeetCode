// https://leetcode.com/contest/biweekly-contest-41/problems/stone-game-vi/
const { expect } = require("chai");
/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
const stoneGameVI = function (aliceValues, bobValues) {
  const n = aliceValues.length - 1;
  let aSum = 0, bSum = 0;
  for (let i = 0; i < n; i++) {
    let maxAInd = aliceValues.indexOf(Math.max(...aliceValues));
    console.log("aliceValues[maxAInd]:", aliceValues[maxAInd], maxAInd, aliceValues);
    aSum += aliceValues[maxAInd];
    aliceValues[maxAInd] = 0;
    bobValues[maxAInd] = 0;
    let maxBInd = bobValues.indexOf(Math.max(...bobValues));
    console.log("aliceValues[maxAInd]:", bobValues[maxBInd], maxBInd, bobValues);
    bSum += bobValues[maxBInd];
    aliceValues[maxBInd] = 0;
    bobValues[maxBInd] = 0;
    console.log("A sum:", aSum);
    console.log("B sum:", bSum);
    if (i > n)
      break;
  }
  console.log("aSum == bSum:", aSum, bSum);
  if (aSum == bSum)
    return 0;
  return aSum > bSum ? 1 : -1;
};

describe("5610. Sum of Absolute Differences in a Sorted Array", () => {
  let test = 1;
  // it(`${test++}`, () => {
  //   const aliceValues = [1, 3], bobValues = [2, 1];
  //   const res = stoneGameVI(aliceValues, bobValues);
  //   expect(res).to.be.eql(1);
  // });
  it(`${test++}`, () => {
    const aliceValues = [1, 2], bobValues = [3, 1];
    const res = stoneGameVI(aliceValues, bobValues);
    expect(res).to.be.eql(0);
  });
  // it(`${test++}`, () => {
  //   const aliceValues = [2, 4, 3], bobValues = [1, 6, 7];
  //   const res = stoneGameVI(aliceValues, bobValues);
  //   expect(res).to.be.eql(-1);
  // });
});