// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const removeInvalidChars = (s, open, close, reverse = false) => {
    let cnts = 0, result = [];
    for (let char of s) {
      if (char === open) cnts++;
      if (char === close) {
        if (cnts === 0) continue;
        cnts--;
      }
      result.push(char);
    }
    if (reverse) result.reverse().join("")
    return result.join("");
  }

  s = removeInvalidChars(s, "(", ")");
  s = removeInvalidChars(s.split("").reverse().join(""), ")", "(", true);
  return s;
};