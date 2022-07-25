/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const counts = {};
  for (let char of s) {
    counts[char] = (counts[char] || 0) + 1;
    if (counts[char] == 2) return char;
  }
};