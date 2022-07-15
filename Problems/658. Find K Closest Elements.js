// https://leetcode.com/problems/find-k-closest-elements/
/* 
  This leads us to the question: how do we move our pointers left and right? 
  If the element at arr[mid] is closer to x than arr[mid + k], 
  then that means arr[mid + k], as well as every element to the right of it can never be in the answer. 
  This means we should move our right pointer to avoid considering them. 
  The logic is the same vice-versa - if arr[mid + k] is closer to x, then move the left pointer.
*/


/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let left = 0, right = arr.length - k, mid;
  while (left <= right) {
    mid = left + ((right - left) >> 1);
    if (x - arr[mid] > arr[mid + k] - x) // mid is closer
      left = mid + 1;
    else
      right = mid - 1;
  }
  return arr.slice(left, left + k);
};