function charCount(str) {
  let map = {};
  for (let ch of str) {
    map[ch] = map[ch] ? map[ch] + 1 : 1;
  }
  Object.keys(map).forEach((el) =>
    console.log(`char ${el} occured ${map[el]} times`)
  );
}

function longestSubtr(str) {
  let map = new Map();
  let res = 0;
  let i = 0;
  for (let right = 0; right < str.length; right++) {
    if (map.has(str[right])) {
      i = Math.max(i, map.get(str[right]) + 1);
    }
    map.set(str[right], right);
    res = Math.max(res, right - i + 1);
  }
  console.log(
    "Length of the longest substring without repeating characters:",
    res
  );
  return res;
}

longestSubtr("abcabcbb"); // Output: 3
longestSubtr("bbbbb"); // Output: 1
longestSubtr("pwwkew"); // Output: 3

// charCount("Thiss is ");
