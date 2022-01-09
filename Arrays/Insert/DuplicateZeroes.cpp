class Solution {
public:
  void duplicateZeros(vector<int>& arr) {
    int cnt = 0, len = arr.size(), i = 0, isHalfIndex = 0;
    // count till the elements which will be included even after duplicating zeroes
    for(i = 0; i < len && cnt < len; i++){
      cnt++;
      if(cnt >= len) {
        // adjust i to get it right after decrement
        i++;
        // in case of half index, last element will not be duplicated
        isHalfIndex = 1;
        break;
      }
      if(!arr[i])
        cnt++;
    }
    // reduce i by 1 index to work on index
    i--;
    
    // now i has the last element that will be included
    int j = len - 1;
    while(j >= 0){
      arr[j] = arr[i--];
      if(j==0) break;
      if(!isHalfIndex && !arr[j]){
        // dont duplicate if it was cut with half index
        arr[--j] = 0;
      }
      if(isHalfIndex) isHalfIndex = 0;
      j--;
    }
  }
  
  // // this is O(n) space solution
  // void duplicateZeros(vector<int>& arr) {
  //   int len = arr.size(), ind = 0, i = 0;
  //   vector<int> result(len + 1);
  //   while(ind < len){
  //     result[ind++] = arr[i];
  //     if(!arr[i])
  //         result[ind++] = arr[i];
  //     i++;
  //     // cout<< ind << endl;
  //   }
  //   for(int i = 0; i< len; i++)
  //     arr[i] = result[i];
  // }
};