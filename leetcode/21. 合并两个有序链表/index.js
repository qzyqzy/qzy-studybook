var mergeTwoLists = function (list1, list2) {
  // 保持 next 代码统一
  let fakeHead = new ListNode(0);
  let head = fakeHead;
  // 都存在比较值
  while (list1 && list2) {
    if (list1.val < list2.val) {
      head.next = list1;
      list1 = list1.next;
    } else {
      head.next = list2;
      list2 = list2.next;
    }
    // 链表指向下一位
    head = head.next;
  }
  if (list1) {
    head.next = list1;
  }
  if (list2) {
    head.next = list2;
  }
  return fakeHead.next;
};
