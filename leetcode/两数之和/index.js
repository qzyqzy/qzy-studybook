var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let ele = nums[i];
    if (obj[ele] !== undefined) {
      return [obj[ele], i];
    }
    // 根据当前元素判断需要的数字 并且记录下当前元素所在的下标
    // 所需元素对应的值绑定的为当前元素的下标
    obj[target - ele] = i;
  }
};
