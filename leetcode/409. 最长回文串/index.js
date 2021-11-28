var longestPalindrome = function (s) {
  // 统计各个字母出现的次数
  let map = {};
  const len = s.length;
  for (let i = 0; i < len; i++) {
    let str = s[i];
    map[str] = (map[str] || 0) + 1;
  }

  let res = 0; // 记录长度
  let oddFlag = false; // 是否为奇数回文串
  Object.entries(map).forEach(([key, count]) => {
    // 每个字符都先加次数
    res += count;
    // 字符串的个数是偶数 加上它的次数
    if (count % 2 !== 0) {
      // 打上奇数回文串标记
      oddFlag = true;
      // 此时减 1即可 ，如果次数为 1 直接减没了。如果为 3，就得到了偶数个的次数
      res--;
    }
  });
  // 奇数回文串 + 1
  if (oddFlag) return res + 1;
  return res;
};
