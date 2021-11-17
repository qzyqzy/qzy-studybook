var search = function (nums, target) {
  // 初始 low、high
  let low = 0,
    high = nums.length - 1;
  // 未到截止条件时
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    // 取 mid 位置的值
    const num = nums[mid];
    // 如果等于目标值 直接返回下标
    if (num === target) {
      return mid;
      // 如果大于目标值 代表目标值在左边 移动 high 到 mid 左边
    } else if (num > target) {
      high = mid - 1;
    } else {
      // 否则移动到 mid 右边
      low = mid + 1;
    }
  }
  // 没找着
  return -1;
};
