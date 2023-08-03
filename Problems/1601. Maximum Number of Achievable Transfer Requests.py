# https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/


class Solution:
    def maximumRequests(self, n: int, requests: List[List[int]]) -> int:
        # changes will keep track of net change of people
        changes, result = [0] * n, 0

        def backtrack(index, consideredCnt):
            nonlocal result, changes, requests
            # if all the requests are considered, and net change for each buildings is 0, consider it for candidate
            if index == len(requests):
                if all([el == 0 for el in changes]):
                    result = max(result, consideredCnt)
                return
            # consider both the cases where we take the index th request
            fB, tB = requests[index]
            # consider this request
            changes[fB] -= 1
            changes[tB] += 1
            backtrack(index + 1, consideredCnt + 1)

            # undo the changes to not consider this request
            changes[fB] += 1
            changes[tB] -= 1
            backtrack(index + 1, consideredCnt)

        backtrack(0, 0)
        return result
