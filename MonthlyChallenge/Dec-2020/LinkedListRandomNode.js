// https://leetcode.com/explore/challenge/card/december-leetcoding-challenge/569/week-1-december-1st-december-7th/3552/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head;
  const valueArr = [];
  while(head){
      valueArr.push(head.val);
      head = head.next;
  }
  this.valueArr = valueArr;
};

/**
* Returns a random node's value.
* @return {number}
*/
Solution.prototype.getRandom = function() {
  const randInd = Math.floor(Math.random() * this.valueArr.length);
  // console.log("THis.valueArr:", this.valueArr);
  return this.valueArr[randInd];
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(head)
* var param_1 = obj.getRandom()
*/