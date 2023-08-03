# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def generateTrees(self, n: int) -> List[Optional[TreeNode]]:
        if n == 0:
            return []
        return self.generateTreesHelper(1, n)

    def generateTreesHelper(self, start: int, end: int) -> List[Optional[TreeNode]]:
        if start > end:
            return [None]
        if start == end:
            return [TreeNode(start)]
        res = []
        for i in range(start, end + 1):
            left = self.generateTreesHelper(start, i - 1)
            right = self.generateTreesHelper(i + 1, end)
            for l in left:
                for r in right:
                    res.append(TreeNode(i, l, r))
        return res