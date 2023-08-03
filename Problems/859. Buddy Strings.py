class Solution:
    def buddyStrings(self, s: str, goal: str) -> bool:
        if len(s) != len(goal):
            return False

        # count characters in each string
        sCnt, gCnt = [0] * 26, [0] * 26
        for char in s:
            sCnt[ord(char) - ord("a")] += 1
        for char in goal:
            gCnt[ord(char) - ord("a")] += 1

        # check if there is any repeating character.
        hasMul = sum([1 for val in sCnt if val > 1])

        # if 2 strings are same and atleast one character repeats, we can swap those repeating characters among themselves
        if s == goal and hasMul:
            return True

        diff = 0
        for i in range(len(s)):
            if s[i] != goal[i]:
                diff += 1

        areSameStrings = sCnt == gCnt
        # the difference should exactly be 2
        if diff == 2 and areSameStrings:
            return True
        return False