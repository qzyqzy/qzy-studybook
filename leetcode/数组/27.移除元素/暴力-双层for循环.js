var removeElement = function (nums, val) {
  let len = nums.length;
  // 外层循环遍历数组
  for (let i = 0; i < len; i++) {
    // 发现需要移除的元素 将后面的数字全部往前提一位
    if (nums[i] == val) {
      // 这里的边界要清楚
      for (let j = i + 1; j < len; j++) {
        nums[j - 1] = nums[j];
      }
      // 移除一位后，数组变短了呢
      i--;
      len--;
    }
  }
  return len;
};
