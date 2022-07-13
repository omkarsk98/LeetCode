// https://leetcode.com/problems/binary-tree-level-order-traversal/
// maintain result array.
// traverse DFS and with the level. 
// push node at the respective level array.

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];
  const getKids = (root, level) => {
    if (!root) return;
    if (result.length === level)
      result.push([])
    result[level].push(root.val);
    getKids(root.left, level + 1)
    getKids(root.right, level + 1)
  }
  if (!root) return result;
  getKids(root, 0);
  return result;
};