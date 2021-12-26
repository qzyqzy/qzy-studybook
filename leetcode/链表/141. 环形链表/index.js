var hasCycle = function (head) {
  // 边界情况处理
  if (head == null || head.next == null) {
    return false;
  }
  let slow = head;
  let fast = head;
  do {
    // 快指针到达终点，也代表无环
    if (fast == null || fast.next == null) {
      return false;
    }
    // 你走一步 我走两步
    slow = slow.next;
    fast = fast.next.next;

    // 不追上你我不停
  } while (slow != fast);

  return true;
};
