/*
* @Author: karlo
* @Date:   2016-07-04 22:36:52
* @Last Modified by:   Karlo Espiritu
* @Last Modified time: 2016-07-08 16:19:22
*/

'use strict';


class BinaryTree {

  constructor() {
    this.root = null;
  }

  insert(val) {
    // let node = new BinaryNode(val)

    let node = {
      val: val,
      // new node are leaves
      left: null,
      right: null
    }

    if (this.root === null) {
      this.root = node
    } else {
      this.insertNode(node, this.root)
    }
  }

  locate(find) {
    if (this.root.val == find) {
      return this.root
    } else {
      return this.locateNode(find, this.root)
    }
  }

  locateNode(find, subtree) {

    if (!subtree) {
      return null
    }
    else {
      // found the matching node
      if (find === subtree.val) {
        return subtree
      }
      else if (find < subtree.val) {
        return this.locateNode(find, subtree.left)
      }
      else if (find > subtree.val) {
        return this.locateNode(find, subtree.right)
      }
    }
  }

  // pre-order insert
  insertNode(node, subtree) {

    // if no value in current tree, insert here
    if (!subtree) {
      subtree = node
    }
    else if (node.val < subtree.val) {
        subtree.left = this.insertNode(node, subtree.left)
    }
    else if (node.val > subtree.val) {
        subtree.right = this.insertNode(node, subtree.right)
    }
    return subtree
  }

  printPreOrder(subtree) {

    if (!subtree) {
      return
    }

    console.log(subtree.val)
    this.printPreOrder(subtree.left)
    this.printPreOrder(subtree.right)
    console.log("subtree = "+JSON.stringify(subtree, null, 2))
  }

  printInOrder(subtree) {

    if (!subtree) {
        return
    }

    this.printInOrder(subtree.left)
    console.log(subtree.val)
    this.printInOrder(subtree.right)

  }

  printPostOrder(subtree) {

    if (!subtree) {
        return
    }

    this.printPostOrder(subtree.left)
    this.printPostOrder(subtree.right)
    console.log(subtree.val)

  }

  remove(val, subtree) {

    // find the node to remove and its parent
    let node = null,
        parent = null,
        dir = ''

    subtree = subtree || this.root

    while (subtree) {

      // found node
      if (subtree.val === val) {
        node = subtree
        break
      }
      else if (val < subtree.val) {
        parent = subtree
        subtree = subtree.left
        dir = 'left'
      }
      else if (val > subtree.val) {
        parent = subtree
        subtree = subtree.right
        dir = 'right'
      }
    }

    if (!node) {
      return null
    }

    // case 1 - two children
    if (node.left && node.right) {

      // find highest node on left subtree
      // copy it and its parent

      let replacement = node.left,
          replacementParent = node

      while (replacement.right) {
        replacementParent = replacement
        replacement = replacement.right
      }

      // copy children from node to be deleted
      replacement.left = node.left
      replacement.right = node.right

      // remove the highest left node
      replacementParent.right = null

      // update parent to point to highest left node
      if (dir) {
        parent[dir] = replacement
      }
      // delete root node
      else {
        this.root = replacement
      }
    }
    // case 2 - no children
    else if (!node.left && !node.right) {
      parent[dir] = null
    }
    // case 3 - one child
    else {
      parent[dir] = node.left ? node.left : node.right
    }

    // cleanup deleted node
    node = null
  }

  breadthFirstSearch(val) {

    let queue   = [this.root],
        current = null

    while (queue[0]) {

      current = queue.shift()

      if (val === current.val) {
        return current;
      }
      else {
        if (current.left) {
          queue.push(current.left)
        }
        if (current.right) {
          queue.push(current.right)
        }
      }
    }
    return null
  }

} // end BinaryTree class

let tree = new BinaryTree()
    tree.insert(35)
    tree.insert(25)
    tree.insert(55)
    tree.insert(26)
    tree.insert(15)
    tree.insert(9)
    tree.insert(18)

    tree.locate(15)
    tree.remove(25)
    tree.breadthFirstSearch(15)

    tree.printPreOrder(tree.root)

