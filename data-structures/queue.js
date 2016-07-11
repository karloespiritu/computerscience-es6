/*
* @Author: Karlo Espiritu
* @Date:   2016-07-05 18:36:08
* @Last Modified by:   Karlo Espiritu
* @Last Modified time: 2016-07-06 01:30:06
*/

'use strict';

class Queue {
  constructor() {
    this.tail = -1
    this._queue = []
  }

  enqueue(node) {
    this.tail++
    this._queue[this.tail] = node
  }

  dequeue() {
    let removed = this._queue.shift()
    this.tail--
    return removed
  }

  size() {
    return this.tail + 1
  }

  isEmpty() {
    return (this.size() === 0)
  }
}

let queue = new Queue();
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.dequeue()

    // 2, 3
    console.log(JSON.stringify(queue, null, 2))
