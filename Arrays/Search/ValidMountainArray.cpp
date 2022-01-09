class Solution {
public:
  bool validMountainArray(vector<int>& arr) {
    // reject if length is less than 3
    if(arr.size() < 3) return false;
    
    // reject if first element is greater than second
    if(arr[0] > arr[1]) return false;
    
    
    int direction = 1;
    for(int i = 1; i < arr.size(); i++){
      // reject for duplicate element
      if(arr[i] == arr[i - 1]) return false;
      
      // if array is moving up and element is smaller than previous, reset the direction
      if(direction && arr[i] < arr[i - 1])
        direction = 0;
      
      // if direction is downwards and next element is greater, reject
      if(!direction && arr[i] > arr[i - 1]) return false;
    }
    // direction should be downwards, else reject
    return direction == 0;
  }
};