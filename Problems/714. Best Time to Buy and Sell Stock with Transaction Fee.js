/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let len = prices.length, madeBySelling = 0, madeByHolding = -prices[0];
  for (let i = 1; i < len; i++) {
    madeBySelling = Math.max(madeBySelling, madeByHolding + prices[i] - fee);
    madeByHolding = Math.max(madeByHolding, madeBySelling - prices[i]);
  }
  return madeBySelling;
};