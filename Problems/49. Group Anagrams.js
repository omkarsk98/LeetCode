/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = {};
  for (let str of strs) {
    const key = str.split("").sort().join("");
    if (result[key])
      result[key].push(str);
    else
      result[key] = [str];
  }
  return Object.values(result);
};