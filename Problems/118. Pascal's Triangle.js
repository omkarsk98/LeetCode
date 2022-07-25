// https://leetcode.com/problems/pascals-triangle/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const triangle = [[1]];
  for (let i = 1; i < numRows; i++) {
    const temp = [1];
    for (let j = 1; j < i; j++) {
      temp.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
    }
    temp.push(1);
    triangle.push(temp);
  }
  return triangle;
};