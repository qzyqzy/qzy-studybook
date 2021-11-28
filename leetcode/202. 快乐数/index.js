/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let slow = n;
  let fast = n;

  do {
    // 慢的走一步 快的走两步
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  } while (fast !== 1 && fast !== slow);

  return fast === 1;
};

// 获取下一个快乐数
function getNext(n) {
  // 拆分得到一个数组、求数组每个数字的平方和、得到相加值
  return n
    .toString()
    .split("")
    .map((i) => i ** 2)
    .reduce((a, b) => a + b);
}
