/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  const wLen = words.length, arr = new Uint8Array(wLen).fill(1), sLen = s.length;
  for (let i = 0; i < sLen; i++) {
    for (let j = 0; j < wLen; j++) {
      if (arr[j] === 0) continue;
      if (i < words[j].length && words[j][i] !== s[i]) {
        arr[j] = 0;
      }
      if (i === sLen - 1 && i < words[j].length - 1)
        arr[j] = 0;
    }
  }
  return arr.reduce((sum, cnt) => sum + cnt, 0);
};