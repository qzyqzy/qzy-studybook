/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 假设第一天为最低的
  let minprice = prices[0],
    maxprofit = 0;
  // 因为假设第一天买入的 所以卖出就不能从 0 位置开始
  for (let i = 1; i < prices.length; i++) {
    // 如果还有最小值 替换
    if (prices[i] < minprice) {
      minprice = prices[i];
    } else {
      // 计算今天卖出 能赚多少钱
      let profit = prices[i] - minprice;
      // 跟前面计算的最大值比较一下 取更大的
      maxprofit = Math.max(maxprofit, profit);
    }
  }
  return maxprofit;
};
