// 子链表的反转
const myReverse = (head, tail) => {
  let prev = tail.next;
  let p = head;
  while (prev !== tail) {
    const nex = p.next;
    p.next = prev;
    prev = p;
    p = nex;
  }
  return [tail, head];
};
var reverseKGroup = function (head, k) {
  // 定义临时节点 hair 将其指向 head
  const hair = new ListNode(0);
  hair.next = head;

  // 上一个分组的尾
  let pre = hair;

  // 如果链表还存在值
  while (head) {
    // 当前分组的尾 起始在上一个分组的尾
    // 然后上一个分组的尾 next * k 即可定位到新尾
    let tail = pre;
    // 查看剩余部分长度是否大于等于 k
    for (let i = 0; i < k; ++i) {
      tail = tail.next;
      // 总节点不是k的倍数，最后剩余的节点不需要处理
      if (!tail) {
        return hair.next;
      }
    }
    // 记录当前节点的下一个节点
    const next = tail.next;
    // 翻转当前分组的节点
    [head, tail] = myReverse(head, tail);
    // 把子链表重新接回原链表
    pre.next = head;
    tail.next = next;
    // 下一个分组的位置
    pre = tail;
    head = tail.next;
  }
  // 将 hair 舍弃后返回即可
  return hair.next;
};
