// https://leetcode.com/problems/binary-tree-right-side-view/
// traverse the tree in left root right and update the node at each level.
// if a right node is null, then it wont update and left one would remain
// if right node exists, the level will be updated. i.e. overridden by the right node.
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const rightView = [];
  const recordRightMost = (root, level = 0) => {
    if (!root) return;
    recordRightMost(root.left, level + 1);
    recordRightMost(root.right, level + 1);
    rightView[level] = root.val;
    return;
  }
  recordRightMost(root);
  return rightView;
};