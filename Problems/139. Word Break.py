class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        n = len(s)
        dp = [False] * n
        for i in range(n):
            for word in wordDict:
                if (
                    i == len(word) - 1 and s[: i + 1] == word) 
                    or (i > len(word) - 1 and s[i - len(word) + 1 : i + 1] == word and dp[i - len(word)]):
                    dp[i] = True
        return dp[-1]
