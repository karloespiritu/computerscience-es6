/*
* @Author: Karlo Espiritu
* @Date:   2016-07-05 18:54:40
* @Last Modified by:   Karlo Espiritu
* @Last Modified time: 2016-07-06 18:37:35
*/

'use strict';

class Stack {

  constructor() {
    this.top = -1
    this._stack = []
  }

  push(node) {
    this.top++
    this._stack[this.top] = node
  }

  pop() {
    this._stack.splice(this.top, 1)
    this.top--
  }
}

let stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.pop()
    // 1, 2
    console.log(stack)