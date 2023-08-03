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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root, list = new TreeNode()) {
  if (!root) return null;
  if (!root.left && !root.right) return root;
  const left = flatten(root.left);
  const right = flatten(root.right);
  if (left) {
    left.right = root.right;
    root.right = root.left;
    root.left = null;
  }
  return right || left;
};