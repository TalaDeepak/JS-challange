function charCount(str) {
  let map = {};
  for (let ch of str) {
    map[ch] = map[ch] ? map[ch] + 1 : 1;
  }
  Object.keys(map).forEach((el) =>
    console.log(`char ${el} occured ${map[el]} times`)
  );
}

function longestSubtr(str) {}

charCount("Thiss is ");
