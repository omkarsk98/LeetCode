class Solution {
public:
  bool checkIfExist(vector<int>& arr) {
    // save the double of the element in a seperate set. if that double already exists, return true
    set <float> cache;
    for(int i = 0; i < arr.size(); i++){
      // check if double or half of that no. exists in the cache
      if((cache.find(float(arr[i]) * 2) != cache.end()) || (cache.find(float(arr[i]) / 2) != cache.end())) {
        return true;
      }
      cache.insert(float(arr[i]));
    }
    return false;
  }
};