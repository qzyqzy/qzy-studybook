var isAnagram = function (s, t) {
  // 个数不同 肯定不是
  if (s.length !== t.length) {
    return false;
  }
  // 分别排序 然后对比是否一样即可
  return [...s].sort().join("") === [...t].sort().join("");
};
