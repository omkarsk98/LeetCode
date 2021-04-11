// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = function(prices, fee) {
  let cash = 0,
    hold = -prices[0],
    i = 0;
  const len = prices.length - 1;
  while (i++ < len) {
    cash = Math.max(cash, prices[i] + hold - fee);
    hold = Math.max(hold, cash - prices[i]);
  }
  return cash;
};
/*     
  [1,3,2,8,4,9]
  cash = 7
  hold = 1
 */
