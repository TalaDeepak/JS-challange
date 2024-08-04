var trap = function (height) {
  const n = height.length;
  let res = 0;
  let l = 0;
  let r = n - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (l <= r) {
    if (height[l] <= height[r]) {
      if (height[l] >= leftMax) leftMax = height[l];
      else res += leftMax - height[l];
      l++;
    } else {
      if (height[r] >= rightMax) rightMax = height[r];
      else res += rightMax - height[r];
      r--;
    }
  }
  return res;
};
