class Solution {
  public:
    int findPeakElement(vector<int>& nums) {
      int left = 0, len = nums.size(), right = len - 1, mid, leftElement, rightElement, lowest = pow(-2, 31);
      while(left <= right){
        mid = left + (right - left) / 2;
        // adjust left and right elements
        if(mid - 1 < 0)
          leftElement = lowest;
        else 
          leftElement = nums[mid - 1];
        
        if(mid + 1 >= len)
          rightElement = lowest;
        else 
          rightElement = nums[mid + 1];
          
        // check if it is peak
        if(leftElement < nums[mid] && nums[mid] > rightElement)
          // peak element
          return mid;
        else if(nums[mid] < rightElement)
          left = mid + 1;
        else
          right = mid - 1;
      }
      return left;
    }
};