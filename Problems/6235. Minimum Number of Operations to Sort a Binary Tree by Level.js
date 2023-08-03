/* 
You are given the root of a binary tree with unique values.

In one operation, you can choose any two nodes at the same level and swap their values.

Return the minimum number of operations needed to make the values at each level sorted in a strictly increasing order.

The level of a node is the number of edges along the path between it and the root node. 

Input: root = [1,4,3,7,6,8,5,null,null,null,null,9,null,10]
Output: 3
Explanation:
- Swap 4 and 3. The 2nd level becomes [3,4].
- Swap 7 and 5. The 3rd level becomes [5,6,8,7].
- Swap 8 and 7. The 3rd level becomes [5,6,7,8].
We used 3 operations so return 3.
It can be proven that 3 is the minimum number of operations needed.
*/

var minimumOperations = function (root) {
  console.log("------------------------------------");
  let ans = 0, include = false;
  let queue = [root];
  while (queue.length) {
    console.log("Considering queue:", queue);
    let n = queue.length;
    let prev = -Infinity;
    for (let i = 0; i < n; i++) {
      let node = queue.shift();
      if (include && node.val <= prev) {
        console.log("Including:", node.val);
        ans++;
        node.val = prev + 1;
      }
      prev = node.val;
      let arr = []
      if (node.left) arr = [...arr, node.left.val];
      if (node.right) arr = [...arr, node.right.val];
      if (arr.length)
        queue.push(arr);
    }
    include = true;
  }
  return ans;
}

function minSwaps(arr) {
  let n = arr.length;
  let arrpos = [];
  for (let i = 0; i < n; i++)
    arrpos.push([arr[i], i]);
  arrpos.sort(function (a, b) { return a[0] - b[0]; });

  let vis = new Array(n);
  for (let i = 0; i < n; i++)
    vis[i] = false;

  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (vis[i] || arrpos[i][1] == i)
      continue;

    let cycle_size = 0;
    let j = i;
    while (!vis[j]) {
      vis[j] = true;
      j = arrpos[j][1];
      cycle_size++;
    }

    if (cycle_size > 0) ans += (cycle_size - 1);
  }

  return ans;
}