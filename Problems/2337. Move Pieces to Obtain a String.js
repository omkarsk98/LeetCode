// https://leetcode.com/problems/move-pieces-to-obtain-a-string/
// https://leetcode.com/problems/move-pieces-to-obtain-a-string/discuss/2261229/faster-than-100.00-or-O(N)-or-(Java-and-C%2B%2B)

/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  const len = start.length;
  let sPtr = 0, tPtr = 0;
  while (sPtr <= len && tPtr <= len) {
    while (start[sPtr] === "_") sPtr++;
    while (target[tPtr] === "_") tPtr++;
    if (sPtr === len || tPtr === len) return sPtr === len && tPtr === len;

    if (start[sPtr] != target[tPtr]) return false;

    if (target[tPtr] === "L")
      if (tPtr > sPtr) return false;

    if (target[tPtr] === "R")
      if (sPtr > tPtr) return false;

    sPtr++; tPtr++;
  }
  return true;
};