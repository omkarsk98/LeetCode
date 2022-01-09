class Solution {
public:
  vector<int> sortArrayByParity(vector<int>& nums) {
    int len = nums.size(), start = 0, end = len - 1;
    while(start < end){
      if(!(nums[start] % 2)) // if start one is even, skip to next one
        start++;
      else {
        // if odd was found at the start, check if even is found at the end
        if(!(nums[end] % 2)){
          // even found at the end, replace
          int temp = nums[start];
          nums[start] = nums[end];
          nums[end] = temp;
        }
        // odd is found in the beginning and odd is found at the end, let the odd be at the end
        end--;
      }
    }
    return nums;
  }
};