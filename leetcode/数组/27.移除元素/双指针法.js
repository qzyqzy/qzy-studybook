var removeElement = function (nums, val) {
  let left = 0,
    right = 0,
    len = nums.length;
  for (; right < len; right++) {
    // 如果不为要删除的元素，right 位置赋值给 left
    if (nums[right] != val) {
      nums[left] = nums[right];
      // 指针同时右移
      left++;
    }
  }
  return left;
};
