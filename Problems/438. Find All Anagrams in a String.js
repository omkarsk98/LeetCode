// https://leetcode.com/problems/find-all-anagrams-in-a-string/
// keep char counts for the pattern. It wont change.
// keep running char counts for the window. 
// init counts with the substring of the pattern from 0 to len of pattern
// if it matches, at index to result.
// move the window by decrementing the count of the 1st character and incrementting the count of the new character.

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const res = [], charCounts = p.split("").reduce((obj, char) => {
    obj[char] = (obj[char] || 0) + 1;
    return obj;
  }, {});
  let i = 0, j = p.length - 1,
    strCounts = s.slice(i, j + 1).split("").reduce((obj, char) => {
      obj[char] = (obj[char] || 0) + 1;
      return obj;
    }, {});
  while (j < s.length) {
    // console.log("Checking index:", i);
    if (isAnagram(charCounts, strCounts))
      res.push(i);
    strCounts[s[i]] = strCounts[s[i]] - 1;
    strCounts[s[j + 1]] = (strCounts[s[j + 1]] || 0) + 1;
    i++; j++;
  }
  return res;
};

const isAnagram = (charCounts, strCounts) => {
  // console.log("Checking for:", charCounts, strCounts);
  for (let char in strCounts)
    if (strCounts[char] && strCounts[char] !== charCounts[char]) return false;
  return true;
}