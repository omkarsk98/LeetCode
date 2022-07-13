// https://leetcode.com/problems/container-with-most-water/
// move two pointers from both sides inwards.
// width is the distance between the two pointers.
// height is the height of the shorter line.
// area = width * height
// maxArea = Math.max(maxArea, area)
// move the shorter line towards the other line.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0, right = height.length - 1, maxArea = 0, width, tall;
  while (left < right) {
    width = right - left;
    tall = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, width * tall);
    height[left] < height[right] ? left++ : right--;
  }
  return maxArea;
};