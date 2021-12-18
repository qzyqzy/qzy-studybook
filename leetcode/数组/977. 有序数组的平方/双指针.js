var sortedSquares = function (nums) {
  let i = 0,
    j = nums.length - 1;
  let res = [];
  for (; i <= j; ) {
    let left = Math.abs(nums[i]);
    let right = Math.abs(nums[j]);
    if (right > left) {
      res.unshift(right * right);
      j--;
    } else {
      res.unshift(left * left);
      i++;
    }
  }
  return res;
};
