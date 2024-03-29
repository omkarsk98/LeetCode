// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
	let max = 0, maxCnt = 0;
	for (let i = 0, len = nums.length; i < len; i++) {
		// if current element is 1, increment current counter
		// else set current counter to 0
		if (nums[i])
			max++;
		else
			max = 0;
		if (!maxCnt) maxCnt = max; // is this line required?
		if (max > maxCnt)
			maxCnt = max;
	}
	return maxCnt;
};