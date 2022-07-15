// https://leetcode.com/problems/k-closest-points-to-origin/

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const minHeap = new MinPriorityQueue({
    compare: (a, b) => a.dist - b.dist
  }), result = [];
  let dist;
  for (let [x, y] of points) {
    dist = x ** 2 + y ** 2;
    const obj = { dist, points: [x, y] };
    minHeap.enqueue(obj);
  }
  for (let i = 0; i < k; i++) {
    result.push(minHeap.front().points);
    minHeap.dequeue();
  }
  return result;
};