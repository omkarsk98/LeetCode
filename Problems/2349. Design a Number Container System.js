var NumberContainers = function() {
  this.container = {};
  this.smallestIndHeap = {};
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
  this.container[index] = number;
  if(!this.smallestIndHeap[number])
    this.smallestIndHeap[number] = new MinPriorityQueue();
  this.smallestIndHeap[number].enqueue(index);
  // console.log(`After setting ${index} as ${number}`, this.smallestIndHeap[number].toArray());
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
  const minHeap = this.smallestIndHeap[number];
  if(!minHeap) return -1;
  let item = minHeap.front();
  while(item && this.container[item.element] !== number){
    console.log("item:", item);
    minHeap.dequeue();
    item = minHeap.front();
  }
  return item?.element || -1;
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */

/* 
["NumberContainers","find","change","change","change","change","find","change","find"]
[[],[10],[2,10],[1,10],[3,10],[5,10],[10],[1,20],[10]]
["NumberContainers","find","change","find"]
[[],[10],[1000000000,10],[10]]
*/