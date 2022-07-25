/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
 var smallestTrimmedNumbers = function(nums, queries) {
  // console.log("--------------------------------------------------");
  const result = new Array(queries.length), len = nums[0].length;
  let i = 0;
  for(const [k, trim] of queries){
    const arr = nums.map(num => BigInt(num.slice(len - trim, len)));
    result[i++] = getKSmallest(arr, k);
  }
  return result;
};

const getKSmallest = (arr, k) => {
  const minHeap = new MinPriorityQueue({
    compare: (a, b) => {
      if(a.val === b.val) return a.ind < b.ind ? -1 : 1;
      return a.val < b.val ? -1 : 1;
    }
  });
  arr.forEach((val, ind) => minHeap.enqueue({val, ind}));
  // console.log("minHeap:", minHeap.toArray());
  let res;
  for(let i = 0; i < k; i++){
    res = minHeap.front().ind;
    minHeap.dequeue();
  }
  return res;
}