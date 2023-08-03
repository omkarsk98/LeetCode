/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++)
    dp[i] = dp[i - 1] + dp[i - 2];
  // console.log("Dp:", dp);
  return dp.at(-1);
};
