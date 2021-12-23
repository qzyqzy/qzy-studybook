var search = function (nums, target) {
  let low = 0,
    // 不同之处
    high = nums.length;
  // 不同之处
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    const num = nums[mid];
    if (num === target) {
      return mid;
    } else if (num > target) {
      // 不同之处
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  // 没找着
  return -1;
};
