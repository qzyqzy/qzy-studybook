var minSubArrayLen = function (target, nums) {
  let result = 0;
  let sum = 0; // 滑动窗口数值之和
  let i = 0; // 滑动窗口起始位置
  let subLength = 0; // 滑动窗口的长度
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
    // 注意这里使用while，每次更新 i（起始位置），并不断比较子序列是否符合条件
    while (sum >= target) {
      subLength = j - i + 1; // 取子序列的长度
      if (!result) {
        result = subLength;
      } else {
        result = Math.min(result, subLength);
      }
      // 减去第一位数字 然后继续往后比较
      sum -= nums[i];
      i++; // 这里体现出滑动窗口的精髓之处，不断变更i（子序列的起始位置）
    }
  }
  // 如果result没有被赋值的话，就返回0，说明没有符合条件的子序列
  return result;
};
