// https://leetcode.com/problems/smallest-number-in-infinite-set/
var SmallestInfiniteSet = function () {
  this.missing = new Array(1000).fill(0);
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  // if(!this.missing[0]) return 1; // 1 was not missing. 
  // indexOf will give the smallest index having 0. i.e. index+1 will not be missing and it can be returned;
  const index = this.missing.indexOf(0);
  this.missing[index] = 1;
  return index + 1;

};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  this.missing[num - 1] = 0;
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */