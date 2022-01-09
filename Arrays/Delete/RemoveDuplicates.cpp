class Solution {
public:
  int removeDuplicates(vector<int>& nums) {
    if(!nums.size()) return 0;
    int i = 0, j = i + 1;
    while(j < nums.size()){
      while(j < nums.size() && nums[j] == nums[i]) j++;
      // if j has exceeded the array length, nothing is left to copy
      if(j >= nums.size()) break;
      nums[++i] = nums[j++];
    }
    return i + 1;
  }
};