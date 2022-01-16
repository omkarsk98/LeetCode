// https://leetcode.com/explore/learn/card/binary-search/126/template-ii/947/
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 0, right = n;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const res = isBadVersion(mid);
      if (res)
        right = mid - 1;
      else
        left = mid + 1;
    }
    return left;
  };
};