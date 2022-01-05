class Solution {
public:
    int findNumbers(vector<int>& nums) {
        int evens = 0, even = 1;
        for(auto el: nums){
            even = 1;
            while(el){
                el /= 10;
                even = !even;
            }
            if(even) evens++;
        }
        return evens;
    }
};