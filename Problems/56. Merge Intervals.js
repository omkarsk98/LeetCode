// https://leetcode.com/problems/merge-intervals/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] === b[0])
      return a[1] - b[1];
    return a[0] - b[0];
  });
  let prev = intervals[0];
  let result = [prev];
  for (let curr of intervals) {
    if (curr[0] <= prev[1])
      prev[1] = Math.max(curr[1], prev[1]);
    else {
      result.push(curr);
      prev = curr;
    }
  }
  return result;
};