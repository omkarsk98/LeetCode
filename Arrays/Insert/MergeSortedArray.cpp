class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        vector<int> result(m + n);
        int i = 0, j = 0, ind = 0;
        while(i < m && j < n){
            if(nums1[i] < nums2[j])
                result[ind++] = nums1[i++];
            else
                result[ind++] = nums2[j++];
        }
        while(i < m)
            result[ind++] = nums1[i++];
        while(j < n)
            result[ind++] = nums2[j++];
        
        for(int i = 0; i < m + n; i++)
            nums1[i] = result[i];
    }
};