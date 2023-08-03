/* 
Given an integer array nums and an integer k, return the number of subarrays of nums where the least common multiple of the subarray's elements is k.

A subarray is a contiguous non-empty sequence of elements within an array.

The least common multiple of an array is the smallest positive integer that is divisible by all the array elements.
*/
var subarrayLCM = function (nums, k) {
    let n = nums.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        let lcm = nums[i];
        if (lcm == k) ans++;
        for (let j = i + 1; j < n; j++) {
            lcm = lcm * nums[j] / gcd(lcm, nums[j]);
            if (lcm > k) break;
            if (lcm == k) ans++;
        }
    }
    return ans;
};

const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);