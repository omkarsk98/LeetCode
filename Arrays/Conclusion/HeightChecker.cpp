class Solution {
public:
  int heightChecker(vector<int>& heights) {
    // create new array expected where students are in required order
    int len = heights.size();
    // copy original array and sort the new array;
    int expected[len];
    for(int i = 0; i < len; i++)
      expected[i] = heights[i];
    
    // sort expected heights
    sort(expected, expected + len);

    int incorrect = 0;
    for(int i = 0; i < len; i++){
      if(heights[i] != expected[i])
        incorrect++;
    }
    return incorrect;
  }
};