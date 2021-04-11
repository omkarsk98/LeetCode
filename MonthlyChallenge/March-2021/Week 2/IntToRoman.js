const { expect } = require('chai');
const romans = [
  { roman: "M", val: 1000 },
  { roman: "CM", val: 900 },
  { roman: "D", val: 500 },
  { roman: "CD", val: 400 },
  { roman: "C", val: 100 },
  { roman: "XC", val: 90 },
  { roman: "L", val: 50 },
  { roman: "XL", val: 40 },
  { roman: "XL", val: 40 },
  { roman: "X", val: 10 },
  { roman: "IX", val: 9 },
  { roman: "V", val: 5 },
  { roman: "IV", val: 4 },
  { roman: "I", val: 1 }
];

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  let res = '', i = 0;
  while (num > 0) {
    if (num - romans[i].val >= 0) {
      res += romans[i].roman;
      num -= romans[i].val;
    }
    else i++;
  }
  return res;
};

const cases = [
  {
    num: 3,
    res: "III"
  },
  {
    num: 4,
    res: "IV"
  },
  {
    num: 9,
    res: "IX"
  },
  {
    num: 58,
    res: "LVIII"
  },
  {
    num: 1994,
    res: "MCMXCIV"
  }
]
describe("Convert from int to roman", () => {
  for (let testId = 0, len = cases.length; testId < cases.length; testId++) {
    const el = cases[testId];
    it(`num = ${el.num} and result = ${el.res}`, () => {
      const res = intToRoman(el.num);
      expect(res).to.be.equal(el.res);
    });
  }
})