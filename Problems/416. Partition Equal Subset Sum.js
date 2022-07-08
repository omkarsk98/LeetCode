// https://leetcode.com/problems/partition-equal-subset-sum/
// reduced to knapsack
// https://leetcode.com/problems/partition-equal-subset-sum/discuss/462699/Whiteboard-Editorial.-All-Approaches-explained.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let totalSum = nums.reduce((sum, num) => sum + num, 0);
  if (totalSum % 2) return false;
  totalSum /= 2;
  let opt = new Array(nums.length + 1).fill(null);
  opt = opt.map(_ => Array(totalSum + 1).fill(0));
  opt[0][0] = 1;

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j <= totalSum; j++) {
      if (j - nums[i - 1] >= 0)
        opt[i][j] = opt[i - 1][j - nums[i - 1]] || opt[i - 1][j];
      else
        opt[i][j] = opt[i - 1][j];
    }
  }
  return opt.at(-1).at(-1);
};