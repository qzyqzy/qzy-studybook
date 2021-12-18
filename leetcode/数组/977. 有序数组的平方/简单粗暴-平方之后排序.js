var sortedSquares = function (nums) {
  nums = nums.map((item) => item * item);
  nums.sort((a, b) => a - b);
  return nums;
};
