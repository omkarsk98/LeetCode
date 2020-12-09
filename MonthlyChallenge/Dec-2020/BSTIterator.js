// https://leetcode.com/explore/challenge/card/december-leetcoding-challenge/570/week-2-december-8th-december-14th/3560/

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
 */
var BSTIterator = function(root) {
  this.root = root;
  this.stack = [];
  this.inOrderLeft(this.root);
};

/**
* @return {null}
*/
BSTIterator.prototype.inOrderLeft = function(node) {
  while(node){
      this.stack.push(node);
      node = node.left;
  }
};


/**
* @return {number}
*/
BSTIterator.prototype.next = function() {
  let topMostNode = this.stack.pop();
  topMostNode.right && this.inOrderLeft(topMostNode.right);
  return topMostNode.val;
};

/**
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0;
};

/** 
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/