/*
* @Author: Karlo Espiritu
* @Date:   2016-07-05 17:35:58
* @Last Modified by:   Karlo Espiritu
* @Last Modified time: 2016-07-11 16:51:39
*/

'use strict';

class HashTable {
  constructor() {
    this.items = []
    this.items.length = 100
  }

  hash(val) {
    let hashIndex = 0

    for (let i = 0, len = val.length; i < len; i++) {
      hashIndex = i + (hashIndex << 5) - hashIndex
    }
    return hashIndex % this.items.length
  }

  add(val) {

    // already exists in the table
    if (this.lookup(val) !== null) {
        return;
    }
    // create elements as linked list
    else {
      // let node = new HashStruc(val)
      let node = {
        val: val,
        next: null
      }
      let hash = this.hash(val)

      node.val  = val;
      node.next = this.items[hash]
      this.items[hash] = node
    }
  }

  remove(val) {
    let node = this.lookup(val)

    if (node) {
      let hash  = this.hash(val),
          list  = this.items[hash],
          prev  = {}

      while(list) {
        // node to delete is first in list
        if (this.items[hash].val === val) {
          this.items[hash] = this.items[hash].next
          return
        }
        else if (list.val === val) {
          prev.next = list.next
          list = null
          return
        }
        prev = list
        list = list.next
      }
    }
  }

  lookup(val) {

    let hash = this.hash(val),
        node = this.items[hash]

    if (node) {
      while (node) {
        // found the node
        if (node.val === val) {
          return node
        }
        node = node.next
      }
    }
    return null;
  }

}

let table = new HashTable()

// insert single node
table.add('dddddddddd')

// create a collision based on the hash function
table.add('aaa')
table.add('bbb')
table.add('ccc')

table.remove('bbb')
console.log(JSON.stringify(table, null, 2))