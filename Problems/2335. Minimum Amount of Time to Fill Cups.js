// https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/

/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
  const maxHeap = new MaxPriorityQueue();
  amount.forEach(amt => amt && maxHeap.enqueue(amt));

  let counts = 0;
  while (maxHeap.size()) {
    let first = maxHeap.dequeue().element;
    let second = maxHeap.dequeue()?.element;
    second && second--;
    first--;
    if (first)
      maxHeap.enqueue(first);

    if (second)
      maxHeap.enqueue(second);

    counts++;
  }

  return counts;
};