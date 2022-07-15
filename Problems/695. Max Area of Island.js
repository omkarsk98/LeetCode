// https://leetcode.com/problems/max-area-of-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
  const rows = grid.length, cols = grid[0].length, visited = Array.from(Array(rows), () => new Array(cols).fill(0));
  
  const getArea = (i, j) => {
    if(i < 0 || i >= rows || visited[i][j] || !grid[i][j] || j < 0 || j >= cols) return 0;
    visited[i][j] = 1;
    
    return 1 + getArea(i - 1, j) + getArea(i + 1, j) + getArea(i, j - 1) + getArea(i, j + 1);
  }
  
  let maxArea = 0;
  
  for(let i = 0; i < rows; i++)
    for(let j = 0; j < cols; j++)
      maxArea = Math.max(maxArea, getArea(i, j));
  
  return maxArea;
};