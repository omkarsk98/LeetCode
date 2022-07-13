// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// start from 1st char. fix upto the current str and check all the possible combinations.

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits || !digits.length) return [];
  const letters = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  }, res = [];
  const backtrack = (len, str) => {
    if (len === digits.length) {
      res.push(str);
      return;
    }
    for (let char of letters[digits[len]])
      backtrack(len + 1, str + char);
  }
  backtrack(0, '');
  return res;
};