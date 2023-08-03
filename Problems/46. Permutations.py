# https://leetcode.com/problems/permutations/description/
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        result = []

        def backtrack(arr: List[int], pending: List[int]):
            nonlocal nums, result
            if len(arr) == len(nums):
                result.append(arr[:])
                return
            for i in range(len(pending)):
                arr.append(pending[i])
                backtrack(arr, pending[:i] + pending[i + 1 :])
                arr.pop()

        arr = []
        backtrack(arr, nums)
        return result