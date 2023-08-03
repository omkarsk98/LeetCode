/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const len = lists.length,
    kListPtrs = new Array(len),
    minPtrs = new MinPriorityQueue({
      compare: (a, b) => a.val - b.val
    });
  if (!len) return new ListNode().next;
  for (let i = 0; i < len; i++) {
    kListPtrs[i] = lists[i];
    if (kListPtrs[i])
      minPtrs.enqueue({ val: lists[i]?.val, ind: i });
  }
  const result = new ListNode();
  let ptr = result;
  while (minPtrs.size()) {
    const ind = minPtrs.front().ind;
    ptr.next = kListPtrs[ind];
    ptr = ptr.next;
    minPtrs.dequeue();
    kListPtrs[ind] = kListPtrs[ind].next;
    if (kListPtrs[ind])
      minPtrs.enqueue({ ind, val: kListPtrs[ind].val });
  }
  return result.next;
};