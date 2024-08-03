var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    const indexOfFirstOccurrance = s.indexOf(s.charAt(r), l);
    if (indexOfFirstOccurrance !== r) {
      l = indexOfFirstOccurrance + 1;
    }
    maxLen = Math.max(maxLen, r - l + 1);
  }
  return maxLen;
};
