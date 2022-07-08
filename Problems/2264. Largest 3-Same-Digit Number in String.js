// https://leetcode.com/contest/weekly-contest-292/problems/largest-3-same-digit-number-in-string/

/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let one = 0, two = 1, three = 2, max = "-1";
  while (three < num.length) {
    if (num[one] === num[two] && num[two] === num[three]) {
      max = Math.max(+max, +num.slice(one, three + 1)).toString();
    }
    one++;
    two++;
    three++;
  }
  if (max === "0") max = "000";
  return max === "-1" ? "" : max;
};