/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const opt = new Array(n);
  opt[0] = 1;
  opt[1] = 2;
  for (let i = 2; i < n; i++)
    opt[i] = opt[i - 1] + opt[i - 2];
  return opt[n - 1];
};