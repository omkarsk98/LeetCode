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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
const addOneRow = function(root, v, d) {
  if (d == 1) {
    const temp = new TreeNode(v);
    temp.left = root;
    return temp;
  }
  processTree(root, 1, v, d);
  return root;
};

function processTree(node, depth, v, d) {
  if (!node)
    return null;
  if (depth == d - 1) {
    const currLeft = node.left, currRight = node.right;
    node.left = new TreeNode(v);
    node.right = new TreeNode(v);
    node.left.left = currLeft;
    node.right.right = currRight;
  }
  else {
    processTree(node.left, depth + 1, v, d);
    processTree(node.right, depth + 1, v, d);
  }
}