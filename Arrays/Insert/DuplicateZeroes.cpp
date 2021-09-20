class Solution {
public:
    void duplicateZeros(vector<int>& arr) {
        int len = arr.size(), ind = 0, i = 0;
        vector<int> result(len + 1);
        while(ind < len){
            result[ind++] = arr[i];
            if(!arr[i])
                result[ind++] = arr[i];
            i++;
            // cout<< ind << endl;
        }
        for(int i = 0; i< len; i++)
            arr[i] = result[i];
    }
};