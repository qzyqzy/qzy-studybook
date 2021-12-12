var searchInsert = function (nums, target) {
  // 初始值
  const n = nums.length;
  let left = 0,
    right = n - 1;
  while (left <= right) {
    // 取中间值
    let mid = ((right - left) >> 1) + left;
    if (target == nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
