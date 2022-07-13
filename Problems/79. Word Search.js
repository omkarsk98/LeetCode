// https://leetcode.com/problems/word-search/
// start from the top left corner and check if the word is in the grid
// to check if the word is in the grid, check at each position if the character is the same. 
// start with the starting character and traverse all the 4 directions to keep checking if the next characters match.
// mark the current char with "#" to avoid checking it again. and reset it to the actual value when you finish checking.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]], rows = board.length, cols = board[0].length;
  let newI, newJ;

  const checkWord = (i, j, k) => {
    if (board[i][j] !== word[k]) return false;
    // chars have anyways matched. check if it is the last char.
    if (k === word.length - 1) return true;

    board[i][j] = "#";
    for (let [dx, dy] of directions) {
      newI = i + dx;
      newJ = j + dy;
      if (newI >= 0 && newI < rows && newJ >= 0 && newJ < cols)
        if (checkWord(newI, newJ, k + 1)) return true;
    }
    board[i][j] = word[k];
    return false;
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++)
      if (checkWord(i, j, 0)) return true;
  }
  return false;
};