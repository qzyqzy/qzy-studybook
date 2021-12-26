/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummyHead = new ListNode(0); // 设置一个虚拟头结点
  dummyHead.next = head; // 将虚拟头结点指向head，这样方面后面做删除操作
  let cur = dummyHead;
  // 两两交换，保证两个节点都存在
  while (cur.next && cur.next.next) {
    let tmp = cur.next; // 记录临时节点
    let tmp1 = cur.next.next.next; // 临时节点、最后那个元素的下一个指针

    cur.next = cur.next.next; // 相互交换
    cur.next.next = tmp; // 相互交换

    cur.next.next.next = tmp1; // 保证链表顺序不会错误

    cur = cur.next.next; // cur 移动两位，准备下一轮交换
  }
  return dummyHead.next;
};
