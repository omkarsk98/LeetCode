class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int finalMax = 0, currMax = 0;
        for(int i = 0; i < nums.size() ; i++){
            if(nums[i])
                currMax++;
            else
                currMax = 0;
            finalMax = max(finalMax, currMax);
        }
        return finalMax;
    }
};