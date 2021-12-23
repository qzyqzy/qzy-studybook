var minSubArrayLen = function (target, nums) {
  let result = 0; // 最终的结果
  let subLength = 0; // 子序列的长度
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let sum = 0; // 子序列的数值之和
    for (let j = i; j < len; j++) {
      // 设置子序列终止位置为j
      sum += nums[j];
      if (sum >= target) {
        // 一旦发现子序列和超过了s，更新result
        subLength = j - i + 1; // 取子序列的长度
        if (!result) {
          result = subLength;
        } else {
          result = Math.min(result, subLength);
        }
        break; // 因为我们是找符合条件最短的子序列，所以一旦符合条件就break
      }
    }
  }
  // 如果result没有被赋值的话，就返回0，说明没有符合条件的子序列
  return result;
};
