// https://leetcode.com/problems/kth-largest-element-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
  const maxHeap = new MaxPriorityQueue();
  for(let num of nums)
    maxHeap.enqueue(num);
  
  let num;
  for(let i = 0; i < k; i++){
    num = maxHeap.front().element;
    maxHeap.dequeue();
  }
  
  return num;
};