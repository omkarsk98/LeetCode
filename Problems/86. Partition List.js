/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let before = new ListNode(), beforeHead = before, after = new ListNode(), afterHead = after;
  while (head) {
    if (head.val < x) {
      before.next = head;
      before = before.next;
    }
    else {
      after.next = head;
      after = after.next;
    }
    head = head.next;
  }
  before.next = afterHead.next;
  after.next = null;
  return beforeHead.next;
};