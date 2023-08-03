/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || !k) return head;
  let curr = head, len = 1, prev = head;
  while (curr.next) {
    len++;
    curr = curr.next;
  }

  k = k % len;
  if (!k) return head;

  curr = head.next;
  let i = 1;
  while (i < len - k) {
    i++;
    curr = curr.next;
    prev = prev.next;
  }
  prev.next = null;

  const newHead = curr;
  while (curr?.next)
    curr = curr.next;
  if (curr)
    curr.next = head;
  return newHead;
};

/* 
[1,2,3,4,5]
2
[0,1,2]
4
[1,2]
0
[1,2]
1
*/