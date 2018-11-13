const BST = require('./BST');
const tree = new BST();

const arr = [3,4,1];

arr.forEach((item) => tree.insert(item, item));

// tree.right.right.key = 10;


// input = tree
// output = (height of tree)

// root = tree.key
// if(left & right)
//  right counter, left counter -> findmin

function findHeight(tree, lCount = 1, rCount = 1) {
  lCount = lCount;
  rCount = rCount;

  if (tree === null) {
    return 0;
  }

  function leftHeight(curNode) {
    if (curNode.left !== null) {
      lCount++;
      curNode = curNode.left;
      leftHeight(curNode);
    }
    return lCount;
  }

  function rightHeight(curNode) {
    if (curNode.right !== null) {
      rCount++;
      curNode = curNode.right;
      rightHeight(curNode);
      console.log(curNode, '38');
    }
    return rCount;
  }

  return Math.max(leftHeight(tree), rightHeight(tree));
}

// IS it a BST
// By def a BST has to have it's node's left value lower than itself
// the right value is higher than itself

function isBst(tree, minimum, maximum) {
  if (minimum !== undefined && tree.key < minimum) return false;
  if (maximum !== undefined && tree.key > maximum)  return false;

  if(tree.left && !isBst(tree.left, minimum, tree.key)){
    console.log(tree, '58');
    return false;
  }

  if (tree.right && !isBst(tree.right, tree.key, maximum)){
    console.log(tree.left, '63');
    return false;
  }

  return true;

}

// try {
//   console.log(findHeight(tree));
// } catch (error) {
//   console.log(error);
// }


function is_bst(tree, minimum, maximum) {
  if (minimum !== undefined && tree.key < minimum)
    return false;
  if (maximum !== undefined && tree.key > maximum)
    return false;
  if (tree.left  && !is_bst(tree.left , minimum, tree.key))
    return false;
  if (tree.right && !is_bst(tree.right, tree.key, maximum))
    return false;
  return true;
}


//console.log(isBst(tree));
// console.log(tree);

function thirdLargest(tree) {

  let maxNode = tree._findMax();
  if (!maxNode.left && !maxNode.right) {
    return maxNode.parent.left.key;
  } else if(maxNode.left && !maxNode.right) {
      if(!maxNode.right) {
        return maxNode.parent.key
      } else {
        return maxNode.parent.left.key;
      }
    }

}
//thirdLargest(tree)
//console.log(thirdLargest(tree));


function isBal(tree, lCount = 1, rCount = 1) {
  lCount = lCount;
  rCount = rCount;

  if (tree === null) {
    return 0;
  }

  function leftHeight(curNode) {
    if (curNode.left !== null) {
      lCount++;
      curNode = curNode.left;
      leftHeight(curNode);
    }
    return lCount;
  }

  function rightHeight(curNode) {
    if (curNode.right !== null) {
      rCount++;
      curNode = curNode.right;
      rightHeight(curNode);
    }
    return rCount;
  }
  let min = leftHeight(tree);
  let max = rightHeight(tree);
  return Math.abs((min - max)) < 1;
}

console.log(isBal(tree));