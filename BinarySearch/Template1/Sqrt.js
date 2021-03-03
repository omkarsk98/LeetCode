const { expect } = require('chai');
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  let left = 0, right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sqr = mid ** 2;
    if (sqr == x || (sqr < x && ((mid + 1) ** 2) > x))
      return mid;
    else if (sqr < x)
      left = mid + 1;
    else
      right = mid - 1;
  }
};

const cases = {
  1: {
    x: 4,
    res: 2
  },
  2: {
    x: 8,
    res: 2
  }
}

describe(`Given a non-negative integer x, compute and return the square root of x. 
  Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.`,
  () => {
    for (let testId = 1, len = Object.keys(cases).length; testId <= len; testId++) {
      const el = cases[testId];
      it(`${testId} [${el.x}]`, () => {
        const res = mySqrt(el.x);
        expect(res).to.be.equal(el.res);
      });
    }
  })