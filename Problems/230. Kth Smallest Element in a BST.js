// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
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
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
  return getElement(root, k)[k - 1];
};

const getElement = (root, k, inorderArr = []) => {
  if(!root) return inorderArr;
  getElement(root.left, k, inorderArr);
  inorderArr.push(root.val);
  if(inorderArr.length === k)
    return inorderArr;
  getElement(root.right, k, inorderArr);
  return inorderArr;
}