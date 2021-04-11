// https://leetcode.com/explore/challenge/card/april-leetcoding-challenge-2021/594/week-2-april-8th-april-14th/3704/
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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    const depth = getMaxDepth(root);
    return getSum(root, 1, depth, 0);
};

function getMaxDepth(node){
    if(!node)
        return 0;
    const lDepth = getMaxDepth(node.left);
    const rDepth = getMaxDepth(node.right);
    return Math.max(lDepth, rDepth) + 1;
}

function getSum(node, cnt = 0, depth, sum = 0){
    if(!node)
        return sum;
    if(cnt == depth)
        return sum + node.val;
    sum = getSum(node.left, cnt + 1, depth, sum);
    return getSum(node.right, cnt + 1, depth, sum);
}