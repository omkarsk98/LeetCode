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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum, sum = 0) {
  if(!root) return false;
  if(!root.left && !root.right && sum + root.val === targetSum) return true;
  const left = hasPathSum(root.left, targetSum, sum + root.val);
  const right = hasPathSum(root.right, targetSum, sum + root.val);
  return left || right;
};