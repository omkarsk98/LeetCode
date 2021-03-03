// https://leetcode.com/explore/featured/card/january-leetcoding-challenge-2021/579/week-1-january-1st-january-7th/3591/

/**
 * @param {number} n
 * @return {number}
 */
const countArrangement = function (n) {
  const visited = new Array(n + 1).fill(false);
  return getPermutations(n, 1, visited, 0);
};

const getPermutations = function (n, pos, visited, count) {
  if (pos > n)
    count++;
  for (let i = 1; i <= n; i++) {
    if (!visited[i] && (pos % i == 0 || i % pos == 0)) {
      visited[i] = true;
      count = getPermutations(n, pos + 1, visited, count);
      visited[i] = false;
    }
  }
  return count;
}