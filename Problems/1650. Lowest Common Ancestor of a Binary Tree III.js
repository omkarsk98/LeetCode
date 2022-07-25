// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/

/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function (p, q) {
  const pPath = {};
  let pPtr = p;
  while (pPtr) {
    pPath[pPtr.val] = 1;
    pPtr = pPtr.parent;
  }
  let qPtr = q;
  while (qPtr) {
    if (pPath[qPtr.val]) return qPtr;
    qPtr = qPtr.parent;
  }
};