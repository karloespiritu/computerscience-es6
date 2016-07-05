/*
* @Author: karlo
* @Date:   2016-07-05 02:27:52
* @Last Modified by:   Karlo Espiritu
* @Last Modified time: 2016-07-06 01:19:27
*/

'use strict';

class LinkedNode {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  insert(data) {
    let node = new LinkedNode(data)

    if (!this.head) {
      this.head = this.tail = node
    }
    else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }

    return node
  }

  remove(data) {

    if (!this.head.next) {
      this.head = this.tail = null
    }
    else {
      let curr = this.head
      while (curr) {
        if (curr.data === data) {
          curr.prev.next = curr.next
          curr.next.prev = curr.prev
          curr = null
        }
        else {
          curr = curr.next
        }
      }
    }
  }

  find(data) {

    let curr = this.head

    while (curr) {
      if (curr.data === data) {
        return curr
      }
      curr = curr.next
    }

  }

  print() {
    let curr = this.head
    while (curr) {
      console.log(curr)
      curr = curr.next
    }
  }
}

var myList = new DoublyLinkedList()

myList.insert('L')
myList.insert('M')
myList.insert('N')
myList.insert('O')
myList.insert('P')

myList.remove('M')
myList.find('L')
myList.print()

