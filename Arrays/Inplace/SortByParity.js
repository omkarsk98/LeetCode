// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3260/
/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function (A) {
  const LEN = A.length;
  let start = 0, end = LEN - 1;
  while (start < end) {
    if (A[start] % 2 == 0) // check if start one is even
      start++;
    else {
      if (A[end] % 2 == 0) { // even
        let temp = A[start];
        A[start] = A[end];
        A[end] = temp;
      }
      end--;
    }
  }
  return A;
};

const arr = [3, 1, 2, 4];
const res = sortArrayByParity(arr);
console.log("Response:", res);