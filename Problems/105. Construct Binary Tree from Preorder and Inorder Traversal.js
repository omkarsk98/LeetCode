// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let preOrderIndex = 0;

  const makeTree = (left, right) => {
    if (left > right) return null;
    const node = new TreeNode(preorder[preOrderIndex++]);

    node.left = makeTree(left, inOrderMap[node.val] - 1);
    node.right = makeTree(inOrderMap[node.val] + 1, right);
    return node;
  }

  const inOrderMap = {};
  inorder.forEach((num, ind) => inOrderMap[num] = ind);
  return makeTree(0, inorder.length - 1);
};