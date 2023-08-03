/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {
  const isMatching = (word, pattern) => {
    const map = {}, reverseMap = {};
    for(let i = 0, len = pattern.length; i < len; i++){
      if(!map[pattern[i]])
        map[pattern[i]] = word[i];
      if(!reverseMap[word[i]])
        reverseMap[word[i]] = pattern[i];
      if(map[pattern[i]] != word[i] || reverseMap[word[i]] != pattern[i]) return false;
    }
    return true;
  }
  
  return words.filter(word => isMatching(word, pattern));
};