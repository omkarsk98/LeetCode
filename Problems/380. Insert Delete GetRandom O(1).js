
var RandomizedSet = function() {
  this.set = {};
  this.len = 0;
  this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(this.set[val] !== undefined) return false
  this.set[val] = this.len;
  this.len += 1;
  this.arr.push(val);
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if(this.set[val] === undefined) return false;
  const lastElem = this.arr[this.len - 1], currInd = this.set[val];
  this.arr[currInd] = lastElem;
  this.set[lastElem] = currInd;
  this.arr.pop();
  this.len -= 1;
  delete this.set[val];
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return this.arr[this.len * Math.random() | 0];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */