class Solution {
public:
  int search(vector<int>& nums, int target) {
    int len = nums.size(), left = 0, right = len - 1, mid;
    while(left <= right){
      mid = (left + right) / 2;
      if(nums[mid] == target)
        return mid;
      if(nums[mid] > target)
        right = mid - 1;
      else
        left = mid + 1;
    }
    return -1;
  }
};