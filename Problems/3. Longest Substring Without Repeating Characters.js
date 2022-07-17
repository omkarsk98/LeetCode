// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
  if(!s.length) return 0;
  let maxLen = 1, left = 0, right = 1;
  const cache = {
    [s[0]]: 0
  }, sLen = s.length;
  while(right < sLen) {
    if(cache[s[right]] !== undefined){
      // console.log("------- Deleting -------");
      // delete all the characters untill the curr index of left
      while(left <= cache[s[right]]){
        delete cache[s[left]];
        left++;
      }
    }
    cache[s[right]] = right;
    right++;
    // console.log("len:", right - left);
    maxLen = Math.max(right - left, maxLen);
  }
  // console.log("Cache:", cache, left, right);
  return maxLen;
};

console.log("abcabcbb:", lengthOfLongestSubstring("abcabcbb"));
console.log(" :", lengthOfLongestSubstring(" "));