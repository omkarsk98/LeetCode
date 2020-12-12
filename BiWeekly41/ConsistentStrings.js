// https://leetcode.com/contest/biweekly-contest-41/problems/count-the-number-of-consistent-strings/
const { expect } = require("chai");

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = function (allowed, words) {
  const obj = {};
  allowed
    .split("")
    .forEach(el => obj[el] = 1);
  let cnt = 0;
  for (let word in words) {
    let i = 0;
    for (; i < words[word].length; i++) {
      if (!obj[words[word][i]])
        break;
    }
    if (i == words[word].length)
      cnt++;
  }
  return cnt;
};

describe("5609. Count the Number of Consistent Strings", () => {
  let test = 1;
  it(`${test++}`, () => {
    const allowed = "ab", words = ["ad", "bd", "aaab", "baa", "badab"];
    const res = countConsistentStrings(allowed, words);
    expect(res).to.be.equal(2);
  });
  it(`${test++}`, () => {
    const allowed = "abc", words = ["a", "b", "c", "ab", "ac", "bc", "abc"];
    const res = countConsistentStrings(allowed, words);
    expect(res).to.be.equal(7);
  });
  it(`${test++}`, () => {
    const allowed = "cad", words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];
    const res = countConsistentStrings(allowed, words);
    expect(res).to.be.equal(4);
  });
});