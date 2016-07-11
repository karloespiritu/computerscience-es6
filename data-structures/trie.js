/*
* @Author: Karlo Espiritu
* @Date:   2016-07-05 18:57:05
* @Last Modified by:   Karlo Espiritu
* @Last Modified time: 2016-07-06 00:52:31
*/

'use strict';

class Trie {

  constructor() {
    this.root = {}
  }

  add(word) {

    if (word) {
      let current = this.root;

      for (let i=0, len = word.length; i < len; i++) {

        // letter in the trie dosen't exist, add it
        if (word[i] in current === false) {
          current[word[i]] = {
              'end_of_key': false
          }
        }
        // move pointer forward
        current = current[word[i]]
      }
      current.end_of_key = true
    }
  }

  isMember(word) {

    if (word) {
      let current = this.root

      // walkthrough to the last letter in for the searched word
      for (let i = 0, len = word.length; i < len; i++) {
          current = current[word[i]]
      }
      // last letter in the word exists in the trie, and is marked as an end of word
      if (current && current.end_of_key === true) {
        console.log("isMember = true")
        return true
      }
    }
    console.log("isMember = false")
    return false
  }

  remove(word) {

    let current=this.root

    for (let i = 0, len=word.length; i<len; i++) {
      current = current[word[i]];
      console.log("current = " + JSON.stringify(current, null, 2))
    }

    // end of word
    if (current && current.end_of_key === true) {
        current.end_of_key = false;
    }
  }

} //end class


let trie = new Trie()

    trie.add('Hello')
    console.log(JSON.stringify(trie))
    trie.add('Help')
    console.log(JSON.stringify(trie))
    trie.add('Helper')
    console.log(JSON.stringify(trie))
    trie.add('Helped')
    console.log(JSON.stringify(trie))
    trie.isMember('Hex')    // false
    trie.isMember('Helpe')  // false
    trie.isMember('Helper') // true
    trie.isMember('Help')   // true

    trie.remove('Help')

    trie.isMember('Help')   // false

