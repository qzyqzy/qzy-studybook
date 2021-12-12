var partition = function (head, x) {
  // 初始化两个链表
  let small = new ListNode(0);
  const smallHead = small;
  let large = new ListNode(0);
  const largeHead = large;
  // 遍历原链表
  while (head !== null) {
    if (head.val < x) {
      // 存储到小链表
      small.next = head;
      small = small.next;
    } else {
      // 存储到大链表
      large.next = head;
      large = large.next;
    }
    head = head.next;
  }
  // 尾节点
  large.next = null;
  // 联合两个链表
  small.next = largeHead.next;
  // 返回链表 注意next与初始值有关 新增了一个 0
  return smallHead.next;
};
