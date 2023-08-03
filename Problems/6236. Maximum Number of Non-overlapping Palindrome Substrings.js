/* 
You are given a string s and a positive integer k.

Select a set of non-overlapping substrings from the string s that satisfy the following conditions:

    The length of each substring is at least k.
    Each substring is a palindrome.

Return the maximum number of substrings in an optimal selection.

A substring is a contiguous sequence of characters within a string.

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function (s, k) {
  let ans = 0;
  let n = s.length;
  let dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
    if (i < n - 1 && s[i] == s[i + 1]) {
      dp[i][i + 1] = 1;
      ans++;
    }
  }
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      let j = i + len - 1;
      if (s[i] == s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = 1;
        ans++;
      }
    }
  }
  return ans;
};