// https://leetcode.com/problems/word-break/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let i = 0, j = 0;
  const checks = [0], visited = new Set();
  while (checks.length) {
    i = checks.shift();
    if (visited.has(i)) continue;
    for (let j = i + 1; j <= s.length; j++) {
      if (wordDict.includes(s.slice(i, j))) {
        if (j === s.length)
          return true;
        checks.push(j);
      }
    }
    visited.add(i);
  }
  return false;
};