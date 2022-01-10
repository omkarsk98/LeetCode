class Solution {
public:
  int mySqrt(int x) {
    int len = x, left = 0, right = len;
    double mid, sqr;
    while(left <= right){
      mid = left + ((right - left) / 2);
      sqr = mid * mid;
      if(sqr == x || (sqr < x && ((mid + 1) * (mid + 1)) > x)) return mid;
      if(sqr <  x) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  }
};