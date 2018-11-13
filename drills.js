const BST = require('./BST');
const tree = new BST();

const arr = [3,1,4,6,9,2,5,7];
arr.forEach(item => tree.insert(item, item));


// input = tree
// output = (height of tree)

// root = tree.key
// if(left & right)
//  right counter, left counter -> findmin

function findHeight(tree, lCount = 1, rCount = 1) {
  let curNode;
  lCount = lCount;
  rCount = rCount;

  if(tree === null) {
    return 0
  }

  function leftHeight(curNode) {
    if(curNode.left !== null) {
      lCount++
      curNode = curNode.left
      leftHeight(curNode);
    }
    return lCount;
  }

  function rightHeight(curNode) {
    if(curNode.right !== null) {
      rCount++
      curNode = curNode.right
      rightHeight(curNode);
    }
    return rCount;
  }

  return Math.max(leftHeight(tree), rightHeight(tree));
}


try {
  console.log(findHeight(tree));
} catch (error) {
  console.log(error);
}
