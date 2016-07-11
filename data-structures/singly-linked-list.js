/*
* @Author: Karlo Espiritu
* @Date:   2016-07-05 18:45:41
* @Last Modified by:   Karlo Espiritu
* @Last Modified time: 2016-07-11 16:30:19
*/

'use strict';

class LinkedList {

  constructor() {
    this.head = null
  }

  insert(data) {

    // let node = new LinkedNode(data),
    //     curr = this.head
    let curr = this.head
    let node = {
          data: data,
          next: null
        }


    if (!curr) {
        this.head = node
    }
    else {
      while (curr.next) {
        curr = curr.next
      }
      curr.next = node
    }

    return node
  }

  remove(data) {

    if (this.head.data === data) {
        this.head = this.head.next || null
    }
    else {

      let curr = this.head,
          prev = null

      while (curr) {
        if (curr.data === data) {
          prev.next = curr.next
          curr = null
        }
        else {
          prev = curr
          curr = curr.next
        }
      }
    }
  }

  find(data) {
    var curr = this.head;

    while (curr) {
      if (curr.data === data) {
        return curr
      }
      curr = curr.next
    }
  }

  print() {

    var curr = this.head

    while (curr) {
      console.log(curr)
      curr = curr.next
    }
  }

  nToLast(k) {
    let p1 = this.head,
        p2 = this.head

    // move p2 ahead of p1 by k places
    for (let i = 0; i < k - 1; i++) {
      p2 = p2.next;
    }

    // keep moving p1 and p2, when p2 hits the end then p1 is k
    while (p2.next) {
      p1 = p1.next
      p2 = p2.next
    }
    return p1
  }

  reverse() {

    let curr = this.head,
        prev = null,
        next = null

    while (curr) {
      // save the ref to next node to move forward later
      next = curr.next

      // break current link, and set it to node before
      curr.next = prev

      // keep traversing the list by moving pointers forward
      prev = curr
      curr = next

    }

    this.head = prev
  }

  deleteAtNode(node) {

    // can't delete last node in list
    if (!node || !node.next) {
      return false
    }

    // copy data from next node to the node to be deleted
    node.data = node.next.data
    node.next = node.next.next

    return true
  }
}


let myList = new LinkedList();

    myList.insert('a')
    myList.insert('b')
    myList.insert('c')
    myList.insert('d')
    myList.insert('e')
    myList.insert('f')

    myList.remove('b')
    myList.find('a')

    // e
    myList.nToLast(2)

    myList.reverse()

    // f->e->d->c->a
    myList.print()