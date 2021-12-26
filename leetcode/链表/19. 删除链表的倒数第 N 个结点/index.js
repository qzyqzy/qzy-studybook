/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 定义虚拟头节点，常规操作，不再备注
  let dummyHead = new ListNode(0);
  dummyHead.next = head;

  // 定义快慢指针
  let slow = dummyHead;
  let fast = dummyHead;
  // 快指针先行 n 步 , 这样快指针走完链表之后， slow 指针指向的就是要删除的元素
  while (n-- && fast) {
    fast = fast.next;
  }
  fast = fast.next; // fast再提前走一步，因为需要让slow指向删除节点的上一个节点
  // fast 与 slow 一起走
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  // 此时 slow 指向的是要删除节点的上一个
  slow.next = slow.next.next;

  return dummyHead.next;
};
