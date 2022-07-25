/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const n2 = n * 2, result = [];
  const gen = (arr, left = 0, right = 0) => {
    if (arr.length === n2) {
      result.push(arr.join(""));
      return;
    }
    if (left < n) {
      arr.push("(");
      gen(arr, left + 1, right);
      arr.pop();
    }
    if (right < left) {
      arr.push(")");
      gen(arr, left, right + 1);
      arr.pop();
    }
  }
  gen([], 0, 0);
  return result;
};