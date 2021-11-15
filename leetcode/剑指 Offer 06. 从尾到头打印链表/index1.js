var reversePrint = function (head) {
  let res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  let result = [];
  while (res.length) {
    result.push(res.pop());
  }
  return result;
};
