class Solution:
    def reverseVowels(self, s: str) -> str:
        left = 0
        right = len(s) - 1
        VOWELS = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
        s = list(s)
        while left < right:
            if s[left] in VOWELS and s[right] in VOWELS:
                s[left], s[right] = s[right], s[left]
                left += 1
                right -= 1
            if s[left] not in VOWELS:
                left += 1
            if s[right] not in VOWELS:
                right -= 1
        return "".join(s)
