// https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3253/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const nums1Temp = [...nums1];
  let i = 0; j = 0;
  while (i < m && j < n)
    nums1[i + j] = nums1Temp[i] < nums2[j] ? nums1Temp[i++] : nums2[j++];
  while (i < m)
    nums1[i + j] = nums1Temp[i++];
  while (j < n)
    nums1[i + j] = nums2[j++];
};