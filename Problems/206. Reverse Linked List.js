/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let curr = head, nextNode = new ListNode(), temp;
  while (curr) {
    temp = curr.next;
    curr.next = nextNode.next;
    nextNode.next = curr;
    curr = temp;
  }
  return nextNode.next;
};