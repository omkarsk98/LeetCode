// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution {
public:
  int firstBadVersion(int n) {
    int left = 0, right = n, mid, res;
    while(left <= right){
      mid = left + (right - left) / 2;
      res = isBadVersion(mid);
      if(res)
        right = mid - 1;
      else
        left = mid + 1;
    }
    return left;
  }
};