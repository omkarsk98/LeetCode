/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const init = image[sr][sc];
  if (init === newColor) return image;
  const rows = image.length, cols = image[0].length;

  const fill = (row, col) => {
    if (row === -1 || col === -1 || row === rows || col === cols || image[row][col] !== init) return;
    image[row][col] = newColor;
    fill(row - 1, col);
    fill(row + 1, col);
    fill(row, col - 1);
    fill(row, col + 1);
    return;
  }

  fill(sr, sc);
  return image;
};