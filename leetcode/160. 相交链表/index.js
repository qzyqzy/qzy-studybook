var getIntersectionNode = function (headA, headB) {
  // 如果两个链表存在为空的 必然不相交
  if (headA === null || headB === null) {
    return null;
  }

  // 定义两个指针，分别指向对应的头节点
  let pA = headA,
    pB = headB;
  // 指向同一节点时 停止遍历
  // 且 null !== null
  while (pA !== pB) {
    // 如果指针 pA 不为空，就将其移到下一个节点;如果指针 pA 为空，需要将其移动到 headB 的头结点
    pA = pA === null ? headB : pA.next;
    // pB 同理
    pB = pB === null ? headA : pB.next;
  }
  // 返回相交节点
  return pA;
};
