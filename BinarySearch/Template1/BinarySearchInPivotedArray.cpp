class Solution {
public:
  int search(vector<int>& nums, int target) {
    int left = 0, len = nums.size(), right = len - 1, mid;
    while(left <= right){
      mid = left + (right - left) / 2;
      if(nums[mid] == target)
        return mid;
      if(nums[left] <= nums[mid]){
        // ascending between left and mid
        if(nums[left] <= target && target <= nums[mid])
          right = mid - 1;
        else
          left = mid + 1;
      }
      else if(nums[mid] <= target && target <= nums[right])
        left = mid + 1;
      else
        right = mid - 1;
    }
      return -1;
  }
};