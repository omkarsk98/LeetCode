/**
 * @param {number[][]} grid
 * @return {number}
 */
 var equalPairs = function(grid) {
  const counts = {};
  let str = '';
  for(let row of grid){
    str = row.join(",");
    if(!counts[str]) counts[str] = {r: 0, c: 0}
    counts[str].r = counts[str].r + 1;
  }
  // console.log("After row pass:", counts);
  for(let i = 0; i < grid.length; i++){
    const arr = [];
    for(let j = 0; j < grid[0].length; j++){
      arr.push(grid[j][i]);
    }
    str = arr.join(",");
    if(!counts[str]) counts[str] = {r: 0, c: 0}
    counts[str].c = counts[str].c + 1;
  }
  // console.log("After col pass:", counts);
  let cnts = 0;
  for(let str in counts)
    cnts += (counts[str].r * counts[str].c);
  return cnts;
};