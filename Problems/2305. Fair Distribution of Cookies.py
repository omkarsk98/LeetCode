# https://leetcode.com/problems/fair-distribution-of-cookies/

""" 
  How to solve:
    Check all the possible distributions and return the minimum of max of each distribution
"""

class Solution:
    def distributeCookies(self, cookies: List[int], k: int) -> int:
        if k == len(cookies):
            # each student gets one bag and the minimum unfairness is max of cookies
            return max(cookies)
        
        # keep students arr where ith student gets some m amount of total cookies
        students = [0] * k
        result = inf

        def backtrack(index):
            nonlocal result, students, cookies
            # now we distribute the index th bag of cookies
            # if all the cookies are distributed, get unfairness for this distribution
            if index == len(cookies):
                unfairness = max(students)
                result = min(result, unfairness)
                return
            # give this bag to each student one by one
            for i in range(k):
                # give this bag of cookie to the index th student
                students[i] += cookies[index]
                # go to the next bag of cookies
                backtrack(index + 1)
                # take the cookies back. 
                students[i] -= cookies[index]
            
        backtrack(0)
        return result