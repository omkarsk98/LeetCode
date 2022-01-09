class Solution {
public:
  void moveZeroes(vector<int>& nums) {
    // i is pointer for numbers to replace
    int i = 0, len = nums.size();
    for(int j = 0; j < len; j++){
      if(nums[j])
        nums[i++] = nums[j];
    }
    while(i < len)
      nums[i++] = 0;
  }
};