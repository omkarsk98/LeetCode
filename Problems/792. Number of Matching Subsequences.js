// https://leetcode.com/problems/number-of-matching-subsequences/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const runningWords = letters.split("").reduce((obj, char) => {
    obj[char] = [];
    return obj;
  }, {})
  words.forEach(word => {
    runningWords[word[0]].push(word);
  })
  let cnts = 0;
  // console.log("runningWords:", runningWords);
  for (let char of s) {
    const arr = runningWords[char];
    runningWords[char] = [];
    for (let el of arr) {
      const newWord = el.slice(1), le = newWord[0];
      if (!newWord.length) {
        cnts++;
        continue;
      }
      runningWords[le].push(newWord);
    }
  }
  return cnts;
};