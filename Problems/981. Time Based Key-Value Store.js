// https://leetcode.com/problems/time-based-key-value-store/

var TimeMap = function () {
  this.timeMap = new Map();
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function (key, value, timestamp) {
  const data = this.timeMap.get(key) || [];
  data.push([timestamp, value]);
  this.timeMap.set(key, data);
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function (key, timestamp) {
  const keys = this.timeMap.get(key) || [];
  let left = 0, right = keys.length - 1, mid, matched;
  while (left <= right) {
    mid = left + (right - left) / 2 | 0;
    if (timestamp === keys[mid][0])
      return keys[mid][1];
    if (timestamp < keys[mid][0])
      right = mid - 1;
    else
      left = mid + 1;
  }
  return keys[right]?.[1] || "";
};

/** 
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/