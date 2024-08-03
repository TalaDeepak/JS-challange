var threeSum = function (nums) {
  const n = nums.length;
  const ans = new Set();
  const inp = nums.sort((a, b) => a - b);
  for (let i = 0; i < inp.length; i++) {
    if (i > 0 && inp[i] === inp[i - 1]) continue;
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      const sum = inp[i] + inp[j] + inp[k];
      if (sum < 0) j++;
      else if (sum > 0) k--;
      else {
        const temp = [inp[i], inp[j], inp[k]];
        ans.add(temp);
        k--;
        j++;
        while (j < k && inp[j] === inp[j - 1]) j++;
        while (j < k && inp[k] === inp[k + 1]) k--;
      }
    }
  }
  return Array.from(ans);
};
