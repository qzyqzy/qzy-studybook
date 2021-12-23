var removeElements = function (head, val) {
  // a=>b=>c=>d
  // 比如我们要删除 b，我们需要将 a.next 指向 c 即可，以后的每个删除都如此
  // 但是假如我们要删除 a，那么此时要将 a 的值置空，无需修改 next
  // 所以我们可以引入哨兵，保证我们逻辑的统一
  // 哨兵=>a=>b=>c=>d

  // 哨兵 指向 head
  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  let cur = dummyHead;
  while (cur.next) {
    // 判断下一个值是否为要删除的值
    if (cur.next.val == val) {
      // 指向下一个
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  // 去除哨兵
  return ele.next;
};
