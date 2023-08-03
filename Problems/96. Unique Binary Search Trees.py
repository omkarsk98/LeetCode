class Solution:
    def numTrees(self, n: int) -> int:
        @lru_cache()
        def dp(nodes):
            if nodes <= 1:
                return 1
            sum = 0
            for left in range(nodes):
                nodesOnLeft = left
                nodesOnRight = nodes - left - 1
                sum += dp(nodesOnLeft) * dp(nodesOnRight)
            return sum

        return dp(n)
