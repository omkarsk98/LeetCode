// https://leetcode.com/problems/valid-word-abbreviation/

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  let i = 0, j = 0;
  while (i < word.length && j < abbr.length) {
    if (word[i] !== abbr[j] && isNaN(+abbr[j])) return false;
    if (abbr[j] === "0" && isNaN(+abbr[j - 1] && (abbr[j + 1] < "0" || abbr[j + 1] > "9"))) return false; // leading 0
    if (abbr[j] >= "0" && abbr[j] <= "9") {
      let num = +abbr[j], k = j + 1;
      while (abbr[k] >= "0" && abbr[k] <= "9") {
        num = (num * 10) + +abbr[k];
        k++;
      }
      i += num;
      j = k;
    }
    else {
      i++; j++;
    }
  }
  if (i !== word.length || j !== abbr.length) return false;
  return true;
};