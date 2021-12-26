/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 边界情况处理
  if (head == null || head.next == null) {
    return null;
  }
  let slow = head;
  let fast = head;
  do {
    // 快指针到达终点，也代表无环
    if (fast == null || fast.next == null) {
      return null;
    }
    // 你走一步 我走两步
    slow = slow.next;
    fast = fast.next.next;

    // 不追上你我不停
  } while (slow != fast);

  // 代表有环
  fast = head;
  // 快指针指向头节点，然后每次快慢指针各走一步直到相遇，相遇的节点就是入环节点
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return fast;
};
