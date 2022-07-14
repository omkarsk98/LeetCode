// https://leetcode.com/problems/is-subsequence/

// move i on s and j on t
// if chars match, inc i
// always inc j
// true if i === s.length

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (!s.length) return true;
  let i = 0, j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i++;
    j++
  }
  return i === s.length;
};