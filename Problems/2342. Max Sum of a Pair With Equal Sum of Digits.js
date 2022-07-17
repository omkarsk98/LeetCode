/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  const numSums = nums.reduce((obj, num) => {
    const sum = getDigitsSum(num);
    if (!obj[sum])
      obj[sum] = new MaxPriorityQueue();
    obj[sum].enqueue(num);
    return obj;
  }, {});

  let max = -1;
  for (let key in numSums) {
    if (numSums[key].size() === 1) continue;
    const first = numSums[key].front().element;
    numSums[key].dequeue();
    const second = numSums[key].front().element;
    // numSums[key].dequeue();
    max = Math.max(max, first + second);
  }
  return max;
};

const getDigitsSum = num => {
  let sum = 0;
  while (num) {
    sum += (num % 10);
    num = (num / 10) | 0;
  }
  return sum;
}