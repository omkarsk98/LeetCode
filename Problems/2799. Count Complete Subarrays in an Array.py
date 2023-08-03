class Solution:
    def countCompleteSubarrays(self, nums: List[int]) -> int:
        n, gUniq = len(nums), len(set(nums))
        result = 0
        left = 0
        counts = {}
        for right in range(n):
            counts[nums[right]] = counts.get(nums[right], 0) + 1
            while len(counts) == gUniq:
                counts[nums[left]] -= 1
                if counts[nums[left]] == 0:
                    del counts[nums[left]]
                left += 1
            result += left
        return result