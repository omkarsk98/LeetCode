/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums, start = 0, cache = {}) {
  let lastReachable = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] + i >= lastReachable)
      lastReachable = i;
  }
  return lastReachable === 0;
};

// 