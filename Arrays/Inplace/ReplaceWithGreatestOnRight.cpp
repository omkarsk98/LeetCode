class Solution {
public:
  vector<int> replaceElements(vector<int>& arr) {
    int len = arr.size(), greatest = arr[len - 1], toAssign = 0;
    for(int i = len - 1; i >= 0; i--){
      toAssign = greatest;
      if(arr[i] > greatest)
        greatest = arr[i];
      arr[i] = toAssign;
    }
    arr[len - 1] = -1;
    return arr;
  }
};