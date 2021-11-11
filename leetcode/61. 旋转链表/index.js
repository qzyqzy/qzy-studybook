var rotateRight = function (head, k) {
  // 链表不存在、只有一个元素、不移动位置 均不做处理
  if (!head || !head.next || !k) return head;

  // 计算链表的长度与找到尾结点
  let len = 1,
    cur = head;
  while (cur.next) {
    cur = cur.next;
    len++;
  }
  // 将尾结点指向头结点，形成循环链表
  cur.next = head;
  // 计算实际移动的次数
  k = k % len;
  // 计算原始尾结点需要移动的次数
  let move = len - k;
  while (move) {
    cur = cur.next;
    move--;
  }
  // 获取新的头结点
  let newHead = cur.next;
  // 断开尾结点与头结点的关联
  cur.next = null;
  // 返回新的头结点
  return newHead;
};
