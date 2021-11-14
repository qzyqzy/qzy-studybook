var kthToLast = function (head, k) {
  let fast = head;
  let slow = head;
  // 第一个指针先行 k 步
  while (k) {
    fast = fast.next;
    k--;
  }
  // 第一个指针走到尾节点结束
  while (fast) {
    // 两个指针一起行动
    fast = fast.next;
    slow = slow.next;
  }
  return slow.val;
};
