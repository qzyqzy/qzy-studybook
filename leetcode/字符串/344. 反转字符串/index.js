var reverseString = function (s) {
  const n = s.length;
  // 双指针，一前一后 交换位置即可
  for (let left = 0, right = n - 1; left < right; ++left, --right) {
    [s[left], s[right]] = [s[right], s[left]];
  }
};
