// https://leetcode.com/problems/top-k-frequent-words/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const maxHeap = new MaxPriorityQueue({
    compare: (a, b) => {
      if (b.count === a.count) return a.word > b.word ? 1 : -1;
      return b.count - a.count;
    }
  });
  const wordCounts = words.reduce((obj, word) => {
    obj[word] = (obj[word] || 0) + 1;
    return obj;
  }, {});
  // console.log("wordCounts:", wordCounts);
  for (let word in wordCounts)
    maxHeap.enqueue({ count: wordCounts[word], word });

  // console.log("maxHeap:", maxHeap.toArray());
  const result = [];
  for (let i = 0; i < k; i++) {
    const top = maxHeap.dequeue();
    result.push(top.word);

  }
  return result;
};