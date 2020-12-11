const { exit } = require("process");

// https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3247/
const debug = 1;
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let res = [...nums], len = 0;
  res.forEach(num => {
    if (num != val)
      nums[len++] = num;
  });
  nums.length = len;
};


nums = [2, 2, 3];
removeElement(nums, 2);
console.log("nums:", nums,2);

nums = [4, 5];
removeElement(nums, 4);
console.log("nums:", nums, 4);

nums = [3, 2, 2, 3];
removeElement(nums, 3);
console.log("nums:", nums, 3);

nums = [0, 1, 2, 2, 3, 0, 4, 2];
removeElement(nums, 2);
console.log("nums:", nums, 2);

nums = [1];
removeElement(nums, 1);
console.log("nums:", nums, 1);

nums = [2];
removeElement(nums, 3);
console.log("nums:", nums, 3);

nums = [3, 3]
removeElement(nums, 3);
console.log("nums:", nums, 3);