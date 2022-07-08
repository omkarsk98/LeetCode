// https://leetcode.com/problems/spiral-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let leftBound = 0, rightBound = matrix[0].length, topBound = 0, bottomBound = matrix.length, directions = { "up": [-1, 0], "do": [1, 0], "le": [0, -1], "ri": [0, 1] }, move = "ri", i = 0, j = 0, k = 0;
  // if right boundary hit, move down, dec rightBound
  // if bottom boundary hit, move left, dec bottomBound
  // if left boundary hit, move top, inc leftBound
  // if top boundary hit, move right, inc topBound
  const result = Array(matrix.length * matrix[0].length).fill(0);
  while (k < result.length) {
    result[k] = matrix[i][j];
    i += directions[move][0];
    j += directions[move][1];
    k++;
    // check right bound hit
    if (j === rightBound && move === "ri") {
      move = "do";// move down
      j--; // index of right bound. move back to right bound
      i++; // moving down
      topBound++; // top most row has been traversed, lower the upper bound
    }
    // lowerBound hit
    else if (i === bottomBound && move === "do") {
      move = "le"; // move left
      i--; // index of bottom bound. move back to bottom bound
      j--; // moving left
      rightBound--; // right most column has been traversed, lower the right bound
    }
    else if (j === leftBound - 1 && move === "le") {
      move = "up"; // move up 
      i--; // index of left bound. move back to left bound
      j++; // moving up
      bottomBound--; // bottom most column has been traversed, lower the bottom bound
    }
    else if (i === topBound - 1 && move === "up") {
      move = "ri"; // move rights
      i++; // index of top bound. move back to top bound
      j++; // moving right
      leftBound++; // left most column has been traversed, lower the left bound
    }
  }
  return result;
};