function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
// const tree = {
//   val: 4,
//   left: {
//     val: 2,
//     left: {
//       val: 3
//     },
//     right: {
//       val: 1
//     }
//   },
//   right: {
//     val: 6,
//     left: {
//       val: 5
//     }
//   }
// }
const tree = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 3
    },
    right: {
      val: 1
    }
  }
}

function processTree(node, depth = 1, v, d) {
  if (!node)
    return null;
  if (depth == d - 1) {
    const currLeft = node.left, currRight = node.right;
    console.log("Curr Left:", currLeft.constructor.name, "curr right:", currRight.constructor.name);
    node.left = new TreeNode(v);
    node.right = new TreeNode(v);
    node.left.left = currLeft;
    node.right.right = currRight;
  }
  else {
    processTree(node.left, depth + 1, v, d);
    processTree(node.right, depth + 1, v, d);
  }
}

const addOneRow = function (root, v, d) {
  if (d == 1) {
    root.left = new TreeNode(root.val, root.left, root.right);
    return root;
  }
  processTree(root, 1, v, d);
  return root;
};

// const res = processTree(tree, 1, "root", 1, 2);
const res = addOneRow(tree, 1, 3);
// console.log("RES:", treeify.asTree(res),);
// console.log(treeify.asTree(tree, true));
// console.log(treeify.asTree(res, true));
console.log("RES:", JSON.stringify(res, null, 2), res.constructor.name)