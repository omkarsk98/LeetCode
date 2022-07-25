/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
  const rows = matrix.length, cols = matrix[0].length;
  
  const rowWise = new Uint8Array(rows), colWise = new Uint8Array(cols);
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      // if(colWise[j]) continue;
      if(matrix[i][j] === 0){
        rowWise[i] = 1;
        colWise[j] = 1;
      }
    }
  }
  for(let i = 0; i < rows; i++){
    if(rowWise[i]){
      for(let j = 0; j < cols; j++){
        matrix[i][j] = 0;
      }
    }
  }
  for(let i = 0; i < cols; i++){
   if(colWise[i]){
     for(let j = 0; j < rows; j++)
       matrix[j][i] = 0;
   }
  }
  return matrix;
};