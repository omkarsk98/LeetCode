#include<iostream>
#include<vector>

class Solution {
  public:
    int removeDuplicates(vector<int>& nums) {
        if(!nums.size()) return 0;
        int i = 0, j = i + 1;
        while(j < nums.size()){
            while(j < nums.size() && nums[i] == nums[j])
                j++;
            if(j >= nums.size()) break;
            nums[++i] = nums[j];
            j++;
        }
        return i + 1;
    }
};