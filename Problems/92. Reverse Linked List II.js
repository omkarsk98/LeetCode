/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let ind = 1, curr = head, start = head;
  while (ind < left) {
    start = curr;
    curr = curr.next;
    ind++;
  }
  let temp, prevNode = start, link = curr;
  while (ind <= right) {
    temp = curr.next;
    curr.next = prevNode;
    prevNode = curr;
    curr = temp;
    ind++;
  }
  start.next = prevNode;
  link.next = curr
  return left === 1 ? prevNode : head;
};