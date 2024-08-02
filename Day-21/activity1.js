var twoSum = function (nums, target) {
  const prevMap = {};
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    let diff = target - nums[i];
    if (prevMap[diff] !== undefined) return [prevMap[diff], i];
    prevMap[nums[i]] = i;
  }
};
