// https://leetcode.com/problems/valid-palindrome-ii/

/**
 * @param {string} s
 * @return {boolean}
 */const { PriorityQueue } = require("@datastructures-js/priority-queue");

var validPalindrome = function (s) {
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j])
      return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
    i++; j--;
  }
  return true;
};

const isPalindrome = (str, i, j) => {
  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
}