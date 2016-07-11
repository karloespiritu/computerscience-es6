/*
* @Author: Karlo Espiritu
* @Date:   2016-07-05 17:52:18
* @Last Modified by:   Karlo Espiritu
* @Last Modified time: 2016-07-06 01:27:22
*/

'use strict';

class MaxHeap {

  constructor() {
    this.items = []
    this.size = -1
  }

  insert(val) {

    let pos = ++this.size,
        parentIndex = this.findParentIndex(pos)

    // new elements go to last position
    this.items[pos] = val

    if (pos > 0) {
      // bubble up new value
      while (this.items[pos] > this.items[parentIndex]) {
        // update values
        this.items[pos] = this.items[parentIndex]
        this.items[parentIndex] = val

        // move pointers
        pos = parentIndex;
        parentIndex = this.findParentIndex(pos);
      }
    }
    return pos
  }

  deleteMax() {
    // remove current root and replace with last node
    this.items[0] = this.items[this.size]
    this.items.pop()
    this.size--;

    let current = this.items[0],
        currPos = 0,
        indexLeft, indexRight, indexReplace

    while (current) {

      indexLeft  = (2 * currPos) + 1
      indexRight = (2 * currPos) + 2

      if (this.items[indexLeft] > this.items[indexRight] &&
          this.items[indexLeft] > current) {

          indexReplace = indexLeft
      }
      else if (this.items[indexRight] > this.items[indexLeft] &&
               this.items[indexRight] > current) {

          indexReplace = indexRight
      }
      else {
          break
      }

      // swap the current node with the greater child node
      this.items[currPos] = this.items[indexReplace]
      this.items[indexReplace] = current
      currPos = indexReplace
      current = this.items[currPos]
    }
  }

  findParentIndex(index) {
      return Math.floor((index - 1) / 2)
  }
}

let heap = new MaxHeap();

    // [20, 13, 9, 8, 5, 3, 7, 6, 2, 1, 19]
    heap.insert(20);
    heap.insert(13);
    heap.insert(9);
    heap.insert(8);
    heap.insert(5);
    heap.insert(3);
    heap.insert(7);
    heap.insert(6);
    heap.insert(2);
    heap.insert(1);

    // [20, 19, 9, 8, 13, 3, 7, 6, 2, 1, 5]
    heap.insert(19);

    // [25, 19, 20, 8, 13, 9, 7, 6, 2, 1, 5, 3]
    heap.insert(25);

    // [20, 19, 9, 8, 13, 3, 7, 6, 2, 1, 5]
    heap.deleteMax();

    // [19, 13, 9, 8, 5, 3, 7, 6, 2, 1]
    heap.deleteMax();
    console.log(JSON.stringify(heap, null, 2))