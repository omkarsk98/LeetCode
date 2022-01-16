class Solution {
  public:
    int findMin(vector<int>& nums) {
      int len = nums.size(), left = 0, right = len - 1, mid;
      int ans = nums[left];
      
      while(left <= right){
        mid = left + (right - left) / 2;
        if(nums[mid] > nums[right])
          left = mid + 1;
        else {
          ans = min(ans, nums[mid]);
          right = mid - 1;
        }
      }
      return ans;
    }
};