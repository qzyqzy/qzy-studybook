var reverseList = function (head) {
  // 来吧 先按要求定义上
  let prev = null;
  let cur = head;
  // 当前节点不是尾节点 我就不停止
  while (cur) {
    // 临时存储当前节点的下一个节点
    const next = cur.next;
    // 反转
    cur.next = prev;
    // 都往后移动一位
    prev = cur;
    cur = next;
  }
  // 最后返回 prev
  return prev;
};
