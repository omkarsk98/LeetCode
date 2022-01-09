class Solution {
public:
  vector<int> findDisappearedNumbers(vector<int>& nums) {
    int len = nums.size(), temp;
    for(int i = 0; i < len; i++){
      // set indexes of the elements that are present to negative
      temp = abs(nums[i]) - 1;
      // change only if it is still positive
      if(nums[temp] > 0)
        nums[temp] *= -1;
    }
    // if index is still positive, that index no. is not present in the array
    vector<int> res;
    for(int i = 0; i < len; i++){
      // add indexes that have positive no.
      if(nums[i] > 0)
        res.push_back(i + 1);
    }
    return res;
  }
};