// https://leetcode.com/explore/challenge/card/december-leetcoding-challenge/570/week-2-december-8th-december-14th/3561/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if(arr.length<3)
      return false;
  let dir = 0, changed = false, diff;
  for (let i = 0, len = arr.length - 1; i<len; i++){
      diff = arr[i+1] - arr[i];
      if(!diff) return false;
      diff = diff > 0 ? 1 : -1;
      if(!dir) {
          if(diff<0)
              return false;
          dir = diff;
      }
      if(diff != dir){
          if(changed) return false;
          dir = diff;
          changed = true;
      }
  }
  return changed;
};