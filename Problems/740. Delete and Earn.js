/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const counts = _.countBy(nums),
    arr = Object.keys(counts).map(Number).sort((a, b) => a - b),
    len = arr.length,
    dp = new Array(len);
  if (len === 1) return arr[0] * counts[arr[0]];
  dp[0] = arr[0] * counts[arr[0]];
  dp[1] = counts[arr[1] - 1] === undefined ? dp[0] + (arr[1] * counts[arr[1]]) : Math.max(arr[0] * counts[arr[0]], arr[1] * counts[arr[1]]);

  for (let i = 2; i < len; i++)
    dp[i] = Math.max(counts[arr[i] - 1] === undefined ? dp[i - 1] + (arr[i] * counts[arr[i]]) : dp[i - 1], dp[i - 2] + (arr[i] * counts[arr[i]]))
  return dp.at(-1);
};