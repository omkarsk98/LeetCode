/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length;
  if (len === 1) return nums[0];
  return Math.max(robber(nums.slice(1)), robber(nums.slice(0, len - 1)));
};

var robber = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  const len = nums.length, dp = new Array(len);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len; i++)
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  return dp.at(-1);
}