class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxCandies = max(candies)
        res = [False] * len(candies)
        return [candyCnt + extraCandies >= maxCandies for candyCnt in candies]