class Solution {
public:
    bool validMountainArray(vector<int>& arr) {
        if(arr.size() < 3)
            return false;
        int i = 1, dir = 1;
        if(arr[0] >= arr[1])
            return false;
        while(i < arr.size()){
            if(arr[i] == arr[i-1])
                return false;
            if(dir == 1 && arr[i] < arr[i-1])
                dir = -1;
            if(dir == -1 && arr[i] > arr[i-1]){
                return false;
            }
            i++;
        }
        return dir == -1;
    }
};