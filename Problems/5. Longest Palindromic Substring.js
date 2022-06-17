// https://leetcode.com/problems/longest-palindromic-substring/
// https://leetcode.com/problems/longest-palindromic-substring/discuss/2160410/Longest-Palindromic-Substring

var longestPalindrome = function(s) {
  if (s.length == 1) return s;
  let res = s[0], left, right;
  for(let i = 0; i < s.length; i++){
    left = i - 1, right = i + 1;
    while(left >= 0 && right < s.length){
      if(s[left] != s[right]) break;
      if(right + 1 - left > res.length)
        res = s.slice(left, right + 1);
      left--;
      right++;
    }
    left = i, right = i + 1;
    while(left >= 0 && right < s.length){
      if(s[left] != s[right]) break;
      if(right + 1 - left > res.length)
        res = s.slice(left, right + 1);
      left--;
      right++;
    }
  }
  return res;
};