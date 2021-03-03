const { expect } = require('chai');
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */
const guess = function (num, res) {
  if (res == num) return 0;
  return num < res ? 1 : -1;
}


/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function (n, pick) {
  let left = 0, right = n;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const res = guess(mid, pick);
    if (!res)
      return mid;
    else if (res == 1)
      left = mid + 1;
    else
      right = mid - 1;
  }
};

const cases = [{
  n: 10,
  pick: 6
}, {
  n: 1,
  pick: 1
}, {
  n: 2,
  pick: 1
}, {
  n: 2,
  pick: 2
}]

describe(`I pick a number from 1 to n. You have to guess which number I picked.`,
  () => {
    for (let testId = 0, len = cases.length; testId < len; testId++) {
      const el = cases[testId];
      it(`${testId + 1} n=${el.n}, pick=${el.pick}`, () => {
        const res = guessNumber(el.n, el.pick);
        expect(res).to.be.equal(el.pick);
      });
    }
  })