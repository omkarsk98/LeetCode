class Solution {
public:
  vector<int> searchRange(vector<int>& nums, int target) {
    if(!nums.size()){
      vector <int> result {-1, -1};
      return result;
    }
    int leftInd = -1, rightInd = -1, left = 0, right = nums.size() - 1, mid;
    while(left <= right){
      mid = left + (right - left) / 2;
      if(nums[mid] < target)
        left = mid + 1;
      else
        right = mid - 1;
    
      if(nums[mid] == target)
        leftInd = mid;
    }
    
    left = 0, right = nums.size() - 1;
    while(left <= right){
      mid = left + (right - left) / 2;
      if(nums[mid] <= target)
        left = mid + 1;
      else
        right = mid - 1;
    
      if(nums[mid] == target)
        rightInd = mid;
    }
    
    vector<int> result {leftInd, rightInd};
    return result;
  }
};