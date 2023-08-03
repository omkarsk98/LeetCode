/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const rows = board.length, cols = board[0].length;

  const getStatus = (row, col) => {
    // console.log("Considering for:", row, col);
    let lives = 0, dx, dy;
    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    for (let [x, y] of dirs) {
      dx = row + x;
      dy = col + y;
      if (dx === -1 || dx === rows) continue;
      if (dy === -1 || dy === cols) continue;
      // console.log("At board location:", dx, dy, board[dx][dy]);
      if (board[dx][dy]) lives++;
    }
    // console.log("lives:", lives);
    if (board[row][col] === 1 && lives < 2) return 0;
    if (board[row][col] === 1 && (lives === 2 || lives === 3)) return 1;
    if (board[row][col] === 1 && lives > 3) return 0;
    if (board[row][col] === 0 && lives === 3) return 1;
    return 0;
  }

  const result = Array.from(Array(rows), () => new Array(cols));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++)
      result[i][j] = getStatus(i, j);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++)
      board[i][j] = result[i][j];
  }
  // console.log("board:", board);
};