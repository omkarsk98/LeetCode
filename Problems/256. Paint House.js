/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  const len = costs.length;
  if (!len) return 0;
  for (let i = 1; i < len; i++) {
    costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
    costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);
    costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]);
  }
  return Math.min(...costs.at(-1));
};