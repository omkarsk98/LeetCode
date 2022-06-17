// https://leetcode.com/problems/palindromic-substrings/
// https://leetcode.com/problems/palindromic-substrings/discuss/2065103/js-simple-interative-solution-explained

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  if (s.length == 1)
    return 1;
  let cnts = s.length, left, right;
  for (let i = 0; i < s.length; i++) {
    left = i - 1, right = i + 1;
    while (left >= 0 && right < s.length) {
      if (s[left] != s[right])
        break;
      left--;
      right++;
      cnts++;
    }
    left = i, right = i + 1;
    while (left >= 0 && right < s.length) {
      if (s[left] != s[right])
        break;
      left--;
      right++;
      cnts++;
    }
  }
  return cnts;
};