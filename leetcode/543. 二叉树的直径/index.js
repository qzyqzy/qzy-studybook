var diameterOfBinaryTree = function (root) {
  // 存储最大的直径
  let res = 0;

  // 计算节点的深度
  function deep(node) {
    // 结束条件
    if (!node) {
      return 0;
    }
    let left = deep(node.left);
    let right = deep(node.right);

    // 节点相互比较 大的话就替换临时的
    res = Math.max(res, left + right);

    // 返回当前子节点的深度 再加上本次的深度
    // 能遍历到此 就代表有深度
    return Math.max(left, right) + 1;
  }
  deep(root);
  return res;
};
