class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
        for(int i = 0; i < nums.size(); i++)
            nums[i] *= nums[i];
        vector<int> res(nums.size());
        int i = 0, k = nums.size() - 1, j = nums.size() - 1;
        while(i <= j){
            if(nums[i] < nums[j])
                // nums[j] is greater, put it at the end.
                res[k--] = nums[j--];
            else
                // nums[i] is greater, put it at the end
                res[k--] = nums[i++];
        }
        return res;
    }
};